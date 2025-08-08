import axios, { AxiosError, AxiosInstance } from 'axios'

let accessToken: string | null = null
let refreshToken: string | null = null
let isRefreshing = false
let pendingRequests: Array<() => void> = []

export function setTokens(nextAccess: string | null, nextRefresh?: string | null) {
  accessToken = nextAccess
  if (typeof nextRefresh !== 'undefined') refreshToken = nextRefresh
}

export function getTokens() {
  return { accessToken, refreshToken }
}

export function createHttpClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/api',
  })

  instance.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  })

  instance.interceptors.response.use(
    (r) => r,
    async (error: AxiosError) => {
      const original = error.config!
      if (error.response?.status === 401 && !original.headers?.['x-retried']) {
        if (!refreshToken) throw error
        if (isRefreshing) {
          await new Promise<void>((resolve) => pendingRequests.push(resolve))
        } else {
          try {
            isRefreshing = true
            const resp = await axios.post(
              `${instance.defaults.baseURL}/auth/refresh`,
              { refreshToken }
            )
            const newAccess = (resp.data as any).accessToken as string
            setTokens(newAccess)
          } finally {
            isRefreshing = false
            pendingRequests.forEach((fn) => fn())
            pendingRequests = []
          }
        }
        original.headers = { ...(original.headers || {}), 'x-retried': '1' }
        return instance(original)
      }
      throw error
    }
  )

  return instance
}

export const http = createHttpClient()


