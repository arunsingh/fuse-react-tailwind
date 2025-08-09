// React import kept for types only if needed
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './AppShell'
const Dashboard = React.lazy(() => import('@features/dashboard/Dashboard'))
const CalendarPage = React.lazy(() => import('@features/calendar/CalendarPage'))
const UsersPage = React.lazy(() => import('@features/users/UsersPage'))
const AnalyticsDashboard = React.lazy(() => import('@features/dashboards/AnalyticsDashboard'))
const DatadogDashboard = React.lazy(() => import('@features/dashboards/DatadogDashboard'))
const MarketingDashboard = React.lazy(() => import('@features/dashboards/MarketingDashboard'))
const CRMDashboard = React.lazy(() => import('@features/dashboards/CRMDashboard'))
const StocksDashboard = React.lazy(() => import('@features/dashboards/StocksDashboard'))
import NotFound from '@shared/components/NotFound'
const VoiceGenerator = React.lazy(() => import('@features/voice/VoiceGenerator'))
const SupportChat = React.lazy(() => import('@features/support/SupportChat'))
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
    path: '/dashboards/analytics',
    element: (
      <ProtectedRoute>
        <AppShell>
          <AnalyticsDashboard />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboards/datadog',
    element: (
      <ProtectedRoute>
        <AppShell>
          <DatadogDashboard />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboards/marketing',
    element: (
      <ProtectedRoute>
        <AppShell>
          <MarketingDashboard />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboards/crm',
    element: (
      <ProtectedRoute>
        <AppShell>
          <CRMDashboard />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboards/stocks',
    element: (
      <ProtectedRoute>
        <AppShell>
          <StocksDashboard />
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
  {
    path: '/voice',
    element: (
      <ProtectedRoute>
        <AppShell>
          <VoiceGenerator />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  {
    path: '/support/chat',
    element: (
      <ProtectedRoute>
        <AppShell>
          <SupportChat />
        </AppShell>
      </ProtectedRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <NotFound /> },
])


