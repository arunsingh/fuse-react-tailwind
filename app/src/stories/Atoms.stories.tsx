import type { Meta, StoryObj } from '@storybook/react'
import { Button, TextField } from '@mui/material'

const meta: Meta = { title: 'Atoms/Basic', parameters: { layout: 'padded' } }
export default meta

type Story = StoryObj

export const Buttons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
    </div>
  ),
}

export const Inputs: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
      <TextField label="Email" />
      <TextField label="Password" type="password" />
    </div>
  ),
}


