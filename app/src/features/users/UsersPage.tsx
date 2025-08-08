import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { DefaultService } from '@api/generated/services/DefaultService'
import { Button, Card, CardContent, CardHeader, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function UsersPage() {
  const qc = useQueryClient()
  const [search, setSearch] = useState('')
  const usersQuery = useQuery({
    queryKey: ['users', search],
    queryFn: () => DefaultService.getUsers(1, 50, search),
  })

  const createSchema = z.object({ name: z.string().min(1), email: z.string().email(), role: z.enum(['admin','user']) })
  type CreateForm = z.infer<typeof createSchema>
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CreateForm>({ resolver: zodResolver(createSchema), defaultValues: { role: 'user' } })

  const createMutation = useMutation({
    mutationFn: (payload: CreateForm) => DefaultService.postUsers(payload as any),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['users'] }); reset() },
  })

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Users</Typography>

      <Stack direction="row" spacing={1}>
        <TextField size="small" placeholder="Search users" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button variant="outlined" onClick={() => qc.invalidateQueries({ queryKey: ['users'] })}>Search</Button>
      </Stack>

      <Card>
        <CardHeader title="Create user" />
        <CardContent>
          <form onSubmit={handleSubmit((data) => createMutation.mutateAsync(data))}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField label="Name" {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
              <TextField label="Email" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
              <TextField label="Role" {...register('role')} />
              <Button type="submit" variant="contained" disabled={isSubmitting || createMutation.isPending}>Create</Button>
            </Stack>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Users list" />
        <CardContent>
          {usersQuery.isLoading ? 'Loading...' : (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(usersQuery.data?.items ?? []).map((u) => (
                  <TableRow key={u!.id!}>
                    <TableCell>{u!.name}</TableCell>
                    <TableCell>{u!.email}</TableCell>
                    <TableCell>{u!.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </Stack>
  )
}


