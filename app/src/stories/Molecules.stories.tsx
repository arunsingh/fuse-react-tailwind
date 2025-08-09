import type { Meta, StoryObj } from '@storybook/react'
import { AppShell } from '@app/AppShell'
import Dashboard from '@features/dashboard/Dashboard'

const meta: Meta = { title: 'Molecules/AppShell' }
export default meta

type Story = StoryObj

export const ShellWithDashboard: Story = {
  render: () => (
    <AppShell>
      <Dashboard />
    </AppShell>
  ),
}


