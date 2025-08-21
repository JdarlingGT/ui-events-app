import { AppLayout } from "@/app/layout";

export function DashboardPage() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Welcome</h2>
          <p className="text-muted-foreground">
            This is your dashboard page.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}