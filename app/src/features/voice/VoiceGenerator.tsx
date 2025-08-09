import { Box, Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

export default function VoiceGenerator() {
  const [text, setText] = useState('Hello from the Voice Generator!')
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceUri, setVoiceUri] = useState<string>('')
  const [rate, setRate] = useState<number>(1)
  const [pitch, setPitch] = useState<number>(1)

  useEffect(() => {
    function loadVoices() {
      const v = window.speechSynthesis?.getVoices?.() || []
      setVoices(v)
      if (!voiceUri && v[0]) setVoiceUri(v[0].voiceURI)
    }
    loadVoices()
    if (typeof window !== 'undefined') window.speechSynthesis?.addEventListener?.('voiceschanged', loadVoices)
    return () => {
      if (typeof window !== 'undefined') window.speechSynthesis?.removeEventListener?.('voiceschanged', loadVoices)
    }
  }, [voiceUri])

  const selected = useMemo(() => voices.find((v) => v.voiceURI === voiceUri), [voices, voiceUri])

  function speak() {
    const utter = new SpeechSynthesisUtterance(text)
    if (selected) utter.voice = selected
    utter.rate = rate
    utter.pitch = pitch
    window.speechSynthesis?.speak(utter)
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Voice Generator</Typography>
      <Stack spacing={2}>
        <TextField label="Text" multiline value={text} onChange={(e) => setText(e.target.value)} />
        <TextField select label="Voice" value={voiceUri} onChange={(e) => setVoiceUri(e.target.value)}>
          {voices.map((v) => (
            <MenuItem key={v.voiceURI} value={v.voiceURI}>{v.name} ({v.lang})</MenuItem>
          ))}
        </TextField>
        <TextField type="number" label="Rate" inputProps={{ step: 0.1, min: 0.5, max: 2 }} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        <TextField type="number" label="Pitch" inputProps={{ step: 0.1, min: 0, max: 2 }} value={pitch} onChange={(e) => setPitch(Number(e.target.value))} />
        <Button variant="contained" onClick={speak}>Speak</Button>
      </Stack>
    </Box>
  )
}


