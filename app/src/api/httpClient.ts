import axios, { type AxiosError, type AxiosInstance, type AxiosRequestHeaders } from 'axios'

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
    // RFC 9110 section 12: send Accept to indicate JSON preferred
    config.headers = config.headers || {}
    if (!config.headers.Accept) {
      config.headers.Accept = 'application/json'
    }
    // Send user language preference (RFC 9110 Accept-Language)
    const lang = typeof navigator !== 'undefined' ? navigator.language : 'en'
    if (!config.headers['Accept-Language']) {
      config.headers['Accept-Language'] = lang
    }
    if (accessToken) {
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
        const updatedHeaders: AxiosRequestHeaders = axios.AxiosHeaders.from({
          ...(original.headers || {}),
          'x-retried': '1',
        })
        original.headers = updatedHeaders
        return instance(original)
      }
      throw error
    }
  )

  return instance
}

export const http = createHttpClient()


