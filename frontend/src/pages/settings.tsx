import { AppLayout } from "@/app/layout";

export function SettingsPage() {
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <div className="rounded-lg border p-6">
        <h2 className="text-lg font-semibold">Application Settings</h2>
        <p className="text-muted-foreground">
          Configure your application settings here.
        </p>
      </div>
    </AppLayout>
  );
}