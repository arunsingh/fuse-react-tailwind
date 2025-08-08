// React import kept for types only if needed
import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './AppShell'

function Dashboard() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-600">Welcome.</p>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppShell>
        <Dashboard />
      </AppShell>
    ),
  },
])


