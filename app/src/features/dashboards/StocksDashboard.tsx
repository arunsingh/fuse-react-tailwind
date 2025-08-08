import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

export default function StocksDashboard() {
  const series = [{ name: 'AAPL', data: [170, 171, 172, 168, 169, 173, 175] }]
  const options = { chart: { id: 'stocks' } } as any
  return (
    <div>
      <Typography variant="h5" gutterBottom>Stocks</Typography>
      <Card>
        <CardHeader title="AAPL Price" />
        <CardContent>
          <ReactApexChart options={options} series={series} type="line" height={300} />
        </CardContent>
      </Card>
    </div>
  )
}


