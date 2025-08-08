import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Card, CardContent, CardHeader } from '@mui/material'

export default function CalendarPage() {
  return (
    <Card>
      <CardHeader title="Calendar" />
      <CardContent>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height={600}
          editable
          selectable
          events={[{ title: 'Demo Event', start: new Date().toISOString().slice(0, 10) }]}
        />
      </CardContent>
    </Card>
  )
}


