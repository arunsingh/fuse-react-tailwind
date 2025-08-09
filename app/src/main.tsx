import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { AppProviders } from './app/providers'
import { router } from './app/routes'
import { enableMocks } from './app/bootstrap'
import './i18n'
import { ErrorBoundary } from '@shared/components/ErrorBoundary'
import './api/initOpenAPI'

enableMocks()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </AppProviders>
  </React.StrictMode>,
)


