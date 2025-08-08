import { DefaultService } from '@api/generated/services/DefaultService'
import { setTokens } from '@api/httpClient'

export type AuthUser = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export async function login(email: string, password: string): Promise<AuthUser> {
  const res = await DefaultService.postAuthLogin({ email, password })
  const { accessToken, refreshToken, user } = res
  if (accessToken) localStorage.setItem('accessToken', accessToken)
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
  setTokens(accessToken ?? null, refreshToken ?? null)
  return user as AuthUser
}

export function logout() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  setTokens(null, null)
}

export function getStoredTokens() {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  return { accessToken, refreshToken }
}


