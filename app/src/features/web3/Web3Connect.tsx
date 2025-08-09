import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Web3Connect() {
  const [address, setAddress] = useState<string>('')
  const [chainId, setChainId] = useState<string>('')
  const [message, setMessage] = useState<string>('Hello from Fuse Tailwind Admin!')
  const [sig, setSig] = useState<string>('')

  async function connectWallet() {
    const provider: any = await detectEthereumProvider()
    if (!provider) {
      alert('MetaMask not detected. Please install it to continue.')
      return
    }
    await provider.request({ method: 'eth_requestAccounts' })
    const web3Provider = new ethers.BrowserProvider(provider)
    const signer = await web3Provider.getSigner()
    const addr = await signer.getAddress()
    const network = await web3Provider.getNetwork()
    setAddress(addr)
    setChainId(network.chainId.toString())
  }

  async function signMessage() {
    const provider: any = await detectEthereumProvider()
    if (!provider) return
    const web3Provider = new ethers.BrowserProvider(provider)
    const signer = await web3Provider.getSigner()
    const signature = await signer.signMessage(message)
    setSig(signature)
  }

  useEffect(() => {
    // Auto-connect if already authorized
    connectWallet().catch(() => void 0)
  }, [])

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Web3 Wallet</Typography>
      <Stack spacing={2} sx={{ maxWidth: 640 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Button variant="contained" onClick={connectWallet}>Connect Wallet</Button>
          <TextField label="Address" value={address} fullWidth disabled />
        </Stack>
        <TextField label="Chain ID" value={chainId} disabled />
        <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button variant="outlined" onClick={signMessage} disabled={!address}>Sign Message</Button>
        {sig && (
          <TextField label="Signature" value={sig} multiline disabled />
        )}
      </Stack>
    </Box>
  )
}


