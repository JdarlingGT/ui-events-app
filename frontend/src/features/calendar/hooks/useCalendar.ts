import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
}

// Fetch calendar events for a specific date range
export const useCalendarEvents = (startDate: string, endDate: string) => {
  return useQuery<CalendarEvent[]>({
    queryKey: ["calendar", startDate, endDate],
    queryFn: () => 
      api.get<CalendarEvent[]>(`/calendar?start=${startDate}&end=${endDate}`),
  });
};

// Fetch a single calendar event by ID
export const useCalendarEvent = (id: string) => {
  return useQuery<CalendarEvent>({
    queryKey: ["calendar", id],
    queryFn: () => api.get<CalendarEvent>(`/calendar/${id}`),
  });
};