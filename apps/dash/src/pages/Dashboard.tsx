import React from 'react';

// TODO: Import from shadcn/ui when available
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarInset,
//   SidebarTrigger,
// } from '@/components/ui/sidebar';
// import {
//   Home,
//   Calendar,
//   BarChart3,
//   Truck,
//   Settings,
//   ChevronDown,
//   Menu
// } from 'lucide-react';

// Placeholder Card component (TODO: Replace with shadcn/ui Card)
const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`bg-card text-card-foreground rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Navigation data
const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠', href: '/dashboard', active: true },
  { id: 'events', label: 'Events', icon: '📅', href: '/events' },
  { id: 'bi', label: 'BI', icon: '📊', href: '/bi' },
  { id: 'logistics', label: 'Logistics', icon: '🚛', href: '/logistics' },
  { id: 'settings', label: 'Settings', icon: '⚙️', href: '/settings' },
];

const topNavItems = [
  {
    id: 'events',
    label: 'Events',
    items: [
      { label: 'All Events', href: '/events' },
      { label: 'Create Event', href: '/events/create' },
      { label: 'Event Calendar', href: '/events/calendar' },
      { label: 'Event Reports', href: '/events/reports' },
    ]
  },
  {
    id: 'instructors',
    label: 'Instructors',
    items: [
      { label: 'All Instructors', href: '/instructors' },
      { label: 'Add Instructor', href: '/instructors/add' },
      { label: 'Instructor Schedule', href: '/instructors/schedule' },
      { label: 'Performance', href: '/instructors/performance' },
    ]
  },
  {
    id: 'sales',
    label: 'Sales',
    items: [
      { label: 'Sales Dashboard', href: '/sales' },
      { label: 'Orders', href: '/sales/orders' },
      { label: 'Revenue', href: '/sales/revenue' },
      { label: 'Analytics', href: '/sales/analytics' },
    ]
  },
  {
    id: 'marketing',
    label: 'Marketing',
    items: [
      { label: 'Campaigns', href: '/marketing/campaigns' },
      { label: 'Email Marketing', href: '/marketing/email' },
      { label: 'Social Media', href: '/marketing/social' },
      { label: 'Analytics', href: '/marketing/analytics' },
    ]
  },
  {
    id: 'admin',
    label: 'Admin',
    items: [
      { label: 'User Management', href: '/admin/users' },
      { label: 'System Settings', href: '/admin/settings' },
      { label: 'Permissions', href: '/admin/permissions' },
      { label: 'Audit Log', href: '/admin/audit' },
    ]
  },
];

// Sidebar Component
const DashboardSidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-50 bg-gray-900">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-gray-900">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-xl font-bold text-white">Graston Command</h1>
        </div>
        <nav className="mt-8 flex-1 px-2 space-y-1">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                item.active
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Top Navigation Component
const TopNavigation: React.FC = () => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open main menu</span>
              <span className="text-xl">☰</span>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {topNavItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors"
                    onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                  >
                    {item.label}
                    <span className="ml-1">▼</span>
                  </button>

                  {/* Dropdown menu */}
                  {openDropdown === item.id && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side of navbar */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View notifications</span>
              🔔
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">User menu</span>
              👤
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Widget placeholder components
const WidgetPlaceholder: React.FC<{ title: string; description?: string; className?: string }> = ({
  title,
  description,
  className = ''
}) => (
  <Card className={className}>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-center h-32 bg-gray-50 rounded-md">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-2">📊</div>
          <p className="text-sm">Widget placeholder</p>
          {description && <p className="text-xs mt-1">{description}</p>}
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Dashboard Component
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top Navigation */}
        <TopNavigation />

        {/* Page content */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Page header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-600">
                  Welcome to your command center. Monitor key metrics and manage your operations.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="text-2xl">💰</div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">Total Revenue</div>
                        <div className="text-2xl font-bold text-gray-900">$45,231</div>
                        <div className="text-sm text-green-600">+20.1% from last month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="text-2xl">👥</div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">Active Users</div>
                        <div className="text-2xl font-bold text-gray-900">2,350</div>
                        <div className="text-sm text-green-600">+180.1% from last month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="text-2xl">📅</div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">Events</div>
                        <div className="text-2xl font-bold text-gray-900">12</div>
                        <div className="text-sm text-blue-600">3 upcoming this week</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="text-2xl">📊</div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">Conversion Rate</div>
                        <div className="text-2xl font-bold text-gray-900">3.2%</div>
                        <div className="text-sm text-green-600">+0.5% from last month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main widgets grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  <WidgetPlaceholder
                    title="Revenue Overview"
                    description="Monthly revenue trends and projections"
                    className="h-96"
                  />
                </div>
                <div>
                  <WidgetPlaceholder
                    title="Recent Activity"
                    description="Latest system activities and updates"
                    className="h-96"
                  />
                </div>
              </div>

              {/* Secondary widgets grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <WidgetPlaceholder
                  title="Event Performance"
                  description="Attendance and engagement metrics"
                />
                <WidgetPlaceholder
                  title="Instructor Analytics"
                  description="Performance and scheduling insights"
                />
                <WidgetPlaceholder
                  title="Sales Funnel"
                  description="Conversion tracking and optimization"
                />
              </div>

              {/* Full-width widgets */}
              <div className="grid grid-cols-1 gap-6">
                <WidgetPlaceholder
                  title="System Performance"
                  description="Server metrics, uptime, and system health"
                  className="h-64"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;