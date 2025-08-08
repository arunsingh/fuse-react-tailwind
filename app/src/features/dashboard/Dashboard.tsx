import ReactApexChart from 'react-apexcharts'
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material'

export default function Dashboard() {
  const series = [{ name: 'Visitors', data: [10, 41, 35, 51, 49, 62, 69] }]
  const options = {
    chart: { id: 'basic' },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  } as any

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Typography variant="h5" gutterBottom>Dashboard</Typography>
      <Card>
        <CardHeader title="Weekly Visitors" />
        <CardContent>
          <ReactApexChart options={options} series={series} type="line" height={300} />
        </CardContent>
      </Card>
    </Box>
  )
}


