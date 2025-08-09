import { setTokens } from '@api/httpClient'

export type OAuthProvider = 'google' | 'github' | 'zendesk' | 'freshdesk'

export async function startOAuth(provider: OAuthProvider): Promise<void> {
  // In a real app, redirect to provider; here we mock the flow
  const resp = await fetch(`/api/oauth/${provider}/callback`, { method: 'POST' })
  const data = await resp.json()
  const { accessToken, refreshToken, user } = data
  if (accessToken) localStorage.setItem('accessToken', accessToken)
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
  setTokens(accessToken ?? null, refreshToken ?? null)
  // store basic user profile if needed
  localStorage.setItem('user', JSON.stringify(user))
}


