// React import kept for types only if needed
import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './AppShell'
import Dashboard from '@features/dashboard/Dashboard'
import CalendarPage from '@features/calendar/CalendarPage'
import UsersPage from '@features/users/UsersPage'
import LoginPage from '@features/auth/LoginPage'
import { ProtectedRoute } from '@shared/components/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppShell>
          <Dashboard />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/calendar',
    element: (
      <ProtectedRoute>
        <AppShell>
          <CalendarPage />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <AppShell>
          <UsersPage />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
])


