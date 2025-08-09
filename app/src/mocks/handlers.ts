import { http, HttpResponse } from 'msw'

let currentUser = {
  id: 'u_1',
  name: 'Arun Singh',
  email: 'arun@example.com',
  role: 'admin',
  createdAt: new Date().toISOString(),
}

let users = [currentUser]

export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string }
    if (!body.email || !body.password) {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 400 })
    }
    return HttpResponse.json({
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      user: currentUser,
    })
  }),

  http.post('/api/auth/refresh', async () => {
    return HttpResponse.json({ accessToken: 'access-token' })
  }),

  http.get('/api/auth/me', async () => {
    return HttpResponse.json(currentUser)
  }),

  http.get('/api/users', async ({ request }) => {
    const url = new URL(request.url)
    const search = (url.searchParams.get('search') || '').toLowerCase()
    const filtered = search
      ? users.filter((u) => u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search))
      : users
    return HttpResponse.json({ total: filtered.length, items: filtered })
  }),

  http.post('/api/users', async ({ request }) => {
    const body = (await request.json()) as any
    const newUser = {
      id: `u_${users.length + 1}`,
      createdAt: new Date().toISOString(),
      ...body,
    }
    users.unshift(newUser)
    const headers = new Headers()
    headers.set('Location', `/api/users/${newUser.id}`)
    return HttpResponse.json(newUser, { status: 201, headers })
  }),

  http.get('/api/users/:id', async ({ params }) => {
    const user = users.find((u) => u.id === params.id)
    if (!user) return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    return HttpResponse.json(user)
  }),

  http.put('/api/users/:id', async ({ params, request }) => {
    const idx = users.findIndex((u) => u.id === params.id)
    if (idx === -1) return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    const body = (await request.json()) as any
    users[idx] = { ...users[idx], ...body }
    return HttpResponse.json(users[idx])
  }),

  http.delete('/api/users/:id', async ({ params }) => {
    users = users.filter((u) => u.id !== params.id)
    return new HttpResponse(null, { status: 204 })
  }),

  http.post('/api/audit', async ({ request }) => {
    // accept audit logs
    await request.json()
    return new HttpResponse(null, { status: 204 })
  }),
  http.post('/api/oauth/:provider/callback', async ({ params }) => {
    return HttpResponse.json({
      accessToken: 'oauth-access',
      refreshToken: 'oauth-refresh',
      user: { id: 'u_oauth', name: `${params.provider}-user`, email: `${params.provider}@example.com`, role: 'user', createdAt: new Date().toISOString() },
    })
  }),
]


