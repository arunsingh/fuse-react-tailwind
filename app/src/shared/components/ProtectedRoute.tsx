import { Navigate, useLocation } from 'react-router-dom'
import type React from 'react'

export function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const token = localStorage.getItem('accessToken')
  const location = useLocation()
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return children
}


