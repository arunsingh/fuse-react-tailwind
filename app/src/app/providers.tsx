import React, { createContext, useContext, useMemo, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const queryClient = new QueryClient()

type ColorMode = 'light' | 'dark'
const ColorModeContext = createContext<{ mode: ColorMode; toggle: () => void }>({ mode: 'light', toggle: () => {} })

export function useColorMode() {
  return useContext(ColorModeContext)
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ColorMode>('light')
  const theme = useMemo(() => createTheme({
    palette: { mode,
      primary: { main: `rgb(var(--brand-primary))` },
      secondary: { main: `rgb(var(--brand-secondary))` },
      background: { default: `rgb(var(--brand-bg))` },
    },
    typography: {
      fontFamily: 'Inter, Plus Jakarta Sans, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
  }), [mode])
  const value = useMemo(() => ({ mode, toggle: () => setMode((m) => (m === 'light' ? 'dark' : 'light')) }), [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}


