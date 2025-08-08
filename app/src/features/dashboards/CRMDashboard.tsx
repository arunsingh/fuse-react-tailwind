import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

export default function CRMDashboard() {
  const series = [{ name: 'Opportunities', data: [2, 3, 4, 5, 6, 5, 4] }]
  const options = { chart: { id: 'crm' } } as any
  return (
    <div>
      <Typography variant="h5" gutterBottom>CRM</Typography>
      <Card>
        <CardHeader title="Opportunities" />
        <CardContent>
          <ReactApexChart options={options} series={series} type="area" height={300} />
        </CardContent>
      </Card>
    </div>
  )
}


