import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

export default function MarketingDashboard() {
  const series = [{ name: 'Leads', data: [10, 15, 12, 18, 25, 22, 30] }]
  const options = { chart: { id: 'leads' }, type: 'bar' } as any
  return (
    <div>
      <Typography variant="h5" gutterBottom>Marketing</Typography>
      <Card>
        <CardHeader title="Lead Gen" />
        <CardContent>
          <ReactApexChart options={options} series={series} type="bar" height={300} />
        </CardContent>
      </Card>
    </div>
  )
}


