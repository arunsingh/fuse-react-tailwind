import ReactApexChart from 'react-apexcharts'
import { Box, Typography } from '@mui/material'

export default function Dashboard() {
  const series = [{ name: 'Visitors', data: [10, 41, 35, 51, 49, 62, 69] }]
  const options = {
    chart: { id: 'basic' },
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  } as any

  return (
    <Box sx={{ display: 'grid', gap: 16 }} className="p-2 sm:p-0">
      <Typography variant="h4" sx={{ fontWeight: 600 }}>Dashboard</Typography>
      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="kpi">
          <span className="text-sm text-gray-500">Sessions</span>
          <span className="text-2xl font-semibold">12,845</span>
          <span className="text-xs text-emerald-600">+8.3% vs last week</span>
        </div>
        <div className="kpi">
          <span className="text-sm text-gray-500">Signups</span>
          <span className="text-2xl font-semibold">1,024</span>
          <span className="text-xs text-emerald-600">+3.1%</span>
        </div>
        <div className="kpi">
          <span className="text-sm text-gray-500">Conversion</span>
          <span className="text-2xl font-semibold">4.7%</span>
          <span className="text-xs text-red-600">-0.4%</span>
        </div>
        <div className="kpi">
          <span className="text-sm text-gray-500">MRR</span>
          <span className="text-2xl font-semibold">$42k</span>
          <span className="text-xs text-emerald-600">+1.2%</span>
        </div>
      </Box>
      <div className="card-surface p-4">
        <Typography variant="h6" sx={{ mb: 2 }}>Weekly Visitors</Typography>
        <ReactApexChart options={options} series={series} type="line" height={300} />
      </div>
    </Box>
  )
}


