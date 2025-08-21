import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface Venue {
  id: string;
  name: string;
  address: string;
  capacity: number;
  amenities: string[];
}

// Fetch all venues
export const useVenues = () => {
  return useQuery<Venue[]>({
    queryKey: ["venues"],
    queryFn: () => api.get<Venue[]>("/venues"),
  });
};

// Fetch a single venue by ID
export const useVenue = (id: string) => {
  return useQuery<Venue>({
    queryKey: ["venues", id],
    queryFn: () => api.get<Venue>(`/venues/${id}`),
  });
};

// Create a new venue
export const useCreateVenue = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newVenue: Omit<Venue, "id">) => 
      api.post<Venue>("/venues", newVenue),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["venues"] });
    },
  });
};

// Update an existing venue
export const useUpdateVenue = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, ...updateData }: Partial<Venue> & { id: string }) => 
      api.put<Venue>(`/venues/${id}`, updateData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["venues"] });
      queryClient.invalidateQueries({ queryKey: ["venues", data.id] });
    },
  });
};

// Delete a venue
export const useDeleteVenue = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => api.delete<void>(`/venues/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["venues"] });
    },
  });
};