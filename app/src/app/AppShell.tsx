import React from 'react'
import { AppBar, Box, Container, CssBaseline, IconButton, Toolbar, Typography, Button, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useColorMode } from './providers'

export function AppShell({ children }: { children: React.ReactNode }) {
  const { mode, toggle } = useColorMode()
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
          <IconButton color="inherit" onClick={toggle} sx={{ ml: 'auto' }} aria-label="toggle-theme">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">Dashboard</Button>
            <Button color="inherit" component={RouterLink} to="/calendar">Calendar</Button>
            <Button color="inherit" component={RouterLink} to="/users">Users</Button>
            <Button color="inherit" component={RouterLink} to="/dashboards/analytics">Analytics</Button>
            <Button color="inherit" component={RouterLink} to="/dashboards/datadog">Datadog</Button>
            <Button color="inherit" component={RouterLink} to="/dashboards/marketing">Marketing</Button>
            <Button color="inherit" component={RouterLink} to="/dashboards/crm">CRM</Button>
            <Button color="inherit" component={RouterLink} to="/dashboards/stocks">Stocks</Button>
            <Button color="inherit" component={RouterLink} to="/voice">Voice</Button>
            <Button color="inherit" component={RouterLink} to="/support/chat">Support</Button>
            <Button color="inherit" component={RouterLink} to="/web3">Web3</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ py: 4 }}>{children}</Container>
    </Box>
  )
}


