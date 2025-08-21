import { cookies } from "next/headers"

import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { AppSidebar } from "@/app/(examples)/dashboard/components/app-sidebar"
import { SiteHeader } from "@/app/(examples)/dashboard/components/site-header"

import "@/app/(examples)/dashboard/theme.css"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // For static export, default to open sidebar
  const isStaticExport = process.env.NEXT_OUTPUT_MODE === 'export'
  let defaultOpen = true
  
  if (!isStaticExport) {
    const cookieStore = await cookies()
    defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  }

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
