import { AppLayout } from "@/app/layout";

export function VenuesPage() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Venues</h1>
      </div>
      <div className="rounded-lg border p-6">
        <h2 className="text-lg font-semibold">Venues Management</h2>
        <p className="text-muted-foreground">
          Manage your venues here.
        </p>
      </div>
    </AppLayout>
  );
}