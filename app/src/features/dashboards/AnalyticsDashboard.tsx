import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

export default function AnalyticsDashboard() {
  const series = [{ name: 'Sessions', data: [120, 90, 150, 200, 180, 220, 260] }]
  const options = { chart: { id: 'sessions' }, xaxis: { categories: ['M','T','W','T','F','S','S'] } } as any
  return (
    <div>
      <Typography variant="h5" gutterBottom>Analytics</Typography>
      <Card>
        <CardHeader title="Sessions" />
        <CardContent>
          <ReactApexChart options={options} series={series} type="area" height={300} />
        </CardContent>
      </Card>
    </div>
  )
}


