import { Box, Link, Typography } from '@mui/material'

export default function SupportPage() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Email support</Typography>
      <Typography variant="body1">Contact us at <Link href="mailto:support@example.com">support@example.com</Link></Typography>
    </Box>
  )
}


