import React from 'react'
import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography, Button, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom'

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
          <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">Dashboard</Button>
            <Button color="inherit" component={RouterLink} to="/calendar">Calendar</Button>
            <Button color="inherit" component={RouterLink} to="/users">Users</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ py: 4 }}>{children}</Container>
    </Box>
  )
}


