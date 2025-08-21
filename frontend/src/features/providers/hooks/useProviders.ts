import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface Provider {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
}

// Fetch all providers
export const useProviders = () => {
  return useQuery<Provider[]>({
    queryKey: ["providers"],
    queryFn: () => api.get<Provider[]>("/providers"),
  });
};

// Fetch a single provider by ID
export const useProvider = (id: string) => {
  return useQuery<Provider>({
    queryKey: ["providers", id],
    queryFn: () => api.get<Provider>(`/providers/${id}`),
  });
};

// Create a new provider
export const useCreateProvider = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newProvider: Omit<Provider, "id">) => 
      api.post<Provider>("/providers", newProvider),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["providers"] });
    },
  });
};

// Update an existing provider
export const useUpdateProvider = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, ...updateData }: Partial<Provider> & { id: string }) => 
      api.put<Provider>(`/providers/${id}`, updateData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["providers"] });
      queryClient.invalidateQueries({ queryKey: ["providers", data.id] });
    },
  });
};

// Delete a provider
export const useDeleteProvider = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => api.delete<void>(`/providers/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["providers"] });
    },
  });
};