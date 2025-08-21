import { AppLayout } from "@/app/layout";

export function TasksPage() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
      </div>
      <div className="rounded-lg border p-6">
        <h2 className="text-lg font-semibold">Tasks Management</h2>
        <p className="text-muted-foreground">
          Manage your tasks here.
        </p>
      </div>
    </AppLayout>
  );
}