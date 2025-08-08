import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import { z } from 'zod'
import { login } from './auth'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
type Form = z.infer<typeof schema>

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation() as any
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: 'arun@example.com', password: 'password' },
  })

  async function onSubmit(data: Form) {
    setError(null)
    try {
      await login(data.email, data.password)
      navigate(from, { replace: true })
    } catch (e: any) {
      setError(e?.message || 'Login failed')
    }
  }

  return (
    <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '100vh', p: 2 }}>
      <Paper sx={{ p: 4, width: 360 }} elevation={1}>
        <Stack spacing={2}>
          <Typography variant="h6">Sign in</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField label="Email" type="email" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
              <TextField label="Password" type="password" {...register('password')} error={!!errors.password} helperText={errors.password?.message} />
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in…' : 'Sign in'}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Box>
  )
}


