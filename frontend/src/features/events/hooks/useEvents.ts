import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venueId: string;
  providerId: string;
}

// Fetch all events
export const useEvents = () => {
  return useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: () => api.get<Event[]>("/events"),
  });
};

// Fetch a single event by ID
export const useEvent = (id: string) => {
  return useQuery<Event>({
    queryKey: ["events", id],
    queryFn: () => api.get<Event>(`/events/${id}`),
  });
};

// Create a new event
export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newEvent: Omit<Event, "id">) => 
      api.post<Event>("/events", newEvent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};

// Update an existing event
export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, ...updateData }: Partial<Event> & { id: string }) => 
      api.put<Event>(`/events/${id}`, updateData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["events", data.id] });
    },
  });
};

// Delete an event
export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => api.delete<void>(`/events/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};