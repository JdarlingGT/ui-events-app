import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  assignedTo: string;
  dueDate: string;
}

// Fetch all tasks
export const useTasks = () => {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: () => api.get<Task[]>("/tasks"),
  });
};

// Fetch a single task by ID
export const useTask = (id: string) => {
  return useQuery<Task>({
    queryKey: ["tasks", id],
    queryFn: () => api.get<Task>(`/tasks/${id}`),
  });
};

// Create a new task
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (newTask: Omit<Task, "id">) => 
      api.post<Task>("/tasks", newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

// Update an existing task
export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, ...updateData }: Partial<Task> & { id: string }) => 
      api.put<Task>(`/tasks/${id}`, updateData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["tasks", data.id] });
    },
  });
};

// Delete a task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => api.delete<void>(`/tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};