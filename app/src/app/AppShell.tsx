import React from 'react'
import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Template
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ py: 4 }}>{children}</Container>
    </Box>
  )
}


