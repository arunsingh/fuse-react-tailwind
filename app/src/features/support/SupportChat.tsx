import { Box, Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const MODELS = ['gpt-oss-2', 'gpt-oss-120B', 'claude', 'groq']

export default function SupportChat() {
  const [model, setModel] = useState<string>(MODELS[0])
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user'|'assistant'; content: string }[]>([])

  async function send() {
    if (!input.trim()) return
    const userMsg = { role: 'user' as const, content: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    // mock response
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: `Reply from ${model}: ${userMsg.content}` }])
    }, 400)
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Support Chat</Typography>
      <Stack spacing={2}>
        <TextField select label="Model" value={model} onChange={(e) => setModel(e.target.value)}>
          {MODELS.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
        </TextField>
        <Box sx={{ border: '1px solid', borderColor: 'divider', p: 2, height: 240, overflowY: 'auto' }}>
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <strong>{m.role === 'user' ? 'You' : 'Assistant'}:</strong> {m.content}
            </div>
          ))}
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <TextField fullWidth placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant="contained" onClick={send}>Send</Button>
        </Stack>
      </Stack>
    </Box>
  )
}


