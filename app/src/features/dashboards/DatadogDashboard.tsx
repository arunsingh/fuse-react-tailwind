import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

export default function DatadogDashboard() {
  const series = [{ name: 'Latency (ms)', data: [30, 40, 35, 50, 49, 60, 70] }]
  const options = { chart: { id: 'latency' } } as any
  return (
    <div>
      <Typography variant="h5" gutterBottom>Datadog-like</Typography>
      <Card>
        <CardHeader title="Latency" />
        <CardContent>
          <ReactApexChart options={options} series={series} type="line" height={300} />
        </CardContent>
      </Card>
    </div>
  )
}


