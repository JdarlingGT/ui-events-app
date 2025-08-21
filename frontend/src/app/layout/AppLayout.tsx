import { ReactNode } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { 
  CalendarIcon, 
  DashboardIcon, 
  GearIcon, 
  HomeIcon, 
  PersonIcon, 
  ReaderIcon, 
  RocketIcon, 
  SewingPinIcon 
} from "@radix-ui/react-icons"
import { useUIStore } from "@/lib/store"

const navItems = [
  { title: "Dashboard", url: "/", icon: DashboardIcon },
  { title: "Events", url: "/events", icon: CalendarIcon },
  { title: "Venues", url: "/venues", icon: SewingPinIcon },
  { title: "Providers", url: "/providers", icon: PersonIcon },
  { title: "Tasks", url: "/tasks", icon: ReaderIcon },
  { title: "Calendar", url: "/calendar", icon: CalendarIcon },
]

export function AppLayout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useUIStore()
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <RocketIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Events App</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/settings">
                  <GearIcon className="h-4 w-4" />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 border-b bg-background px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <Button variant="ghost" size="icon">
            <HomeIcon className="h-5 w-5" />
          </Button>
        </header>
        <main className="flex-1 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}