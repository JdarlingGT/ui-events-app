import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EventClickArg, EventInput } from "@fullcalendar/core";

// Sample events data
const sampleEvents: EventInput[] = [
  {
    id: "1",
    title: "Team Meeting",
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(11, 0, 0, 0)),
  },
  {
    id: "2",
    title: "Lunch with Client",
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    allDay: true,
  },
  {
    id: "3",
    title: "Product Launch",
    start: new Date(new Date().setDate(new Date().getDate() + 3)),
    end: new Date(new Date().setDate(new Date().getDate() + 5)),
  },
];

export function EventCalendar() {
  const handleEventClick = (info: EventClickArg) => {
    alert(`Event: ${info.event.title}`);
  };

  const handleEventsSet = (events: any[]) => {
    console.log("Events updated:", events);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Calendar</CardTitle>
        <CardDescription>Manage your events and schedules</CardDescription>
      </CardHeader>
      <CardContent>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={sampleEvents}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          eventClick={handleEventClick}
          eventsSet={handleEventsSet}
        />
      </CardContent>
    </Card>
  );
}