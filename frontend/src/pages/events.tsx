import { AppLayout } from "@/app/layout";

export function EventsPage() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Events</h1>
      </div>
      <div className="rounded-lg border p-6">
        <h2 className="text-lg font-semibold">Events Management</h2>
        <p className="text-muted-foreground">
          Manage your events here.
        </p>
      </div>
    </AppLayout>
  );
}