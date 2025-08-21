import React from 'react';
import { DashboardContentProps, ActivityItem, QuickAction, ChartData } from '../types/dashboard';

// TODO: Import from shadcn/ui when available
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ChartPlaceholder: React.FC<{ title: string; height?: string }> = ({ title, height = 'h-64' }) => {
  return (
    <div className="dashboard-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
        <div className={`${height} chart-placeholder rounded-md`}>
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">📊</div>
            <p>Chart placeholder</p>
            <p className="text-sm">Integration pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentActivity: React.FC<{ activities?: ActivityItem[] }> = ({ activities }) => {
  const defaultActivities: ActivityItem[] = [
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Payment processed', time: '5 minutes ago', type: 'payment' },
    { id: 3, action: 'Report generated', time: '10 minutes ago', type: 'report' },
    { id: 4, action: 'System backup completed', time: '1 hour ago', type: 'system' },
    { id: 5, action: 'New order received', time: '2 hours ago', type: 'order' }
  ];

  const activitiesToShow = activities || defaultActivities;

  const getIcon = (type: string) => {
    switch (type) {
      case 'user': return '👤';
      case 'payment': return '💳';
      case 'report': return '📄';
      case 'system': return '⚙️';
      case 'order': return '🛒';
      default: return '📝';
    }
  };

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Activity</h3>
        <div className="space-y-2">
          {activitiesToShow.map((activity) => (
            <div key={activity.id} className="activity-item flex items-center space-x-3">
              <span className="text-xl">{getIcon(activity.type)}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QuickActions: React.FC<{ actions?: QuickAction[] }> = ({ actions }) => {
  const defaultActions: QuickAction[] = [
    { id: 'report', title: 'Create Report', description: 'Generate a new analytics report', icon: '📊' },
    { id: 'user', title: 'Add User', description: 'Invite a new team member', icon: '👥' },
    { id: 'analytics', title: 'View Analytics', description: 'Check detailed metrics', icon: '📈' },
    { id: 'settings', title: 'Settings', description: 'Configure system preferences', icon: '⚙️' }
  ];

  const actionsToShow = actions || defaultActions;

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actionsToShow.map((action) => (
            <button
              key={action.id}
              className="quick-action-button"
              onClick={action.onClick}
              disabled={action.disabled}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{action.icon}</span>
                <div>
                  <p className="font-medium">{action.title}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DashboardContent: React.FC<DashboardContentProps> = ({
  className,
  charts = [],
  activities = [],
  quickActions = [],
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className={`space-y-6 ${className || ''}`}>
        <div className="dashboard-content-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="dashboard-card">
              <div className="p-6">
                <div className="h-6 bg-muted rounded mb-4 loading-skeleton"></div>
                <div className="h-80 bg-muted rounded loading-skeleton"></div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="dashboard-card">
              <div className="p-6">
                <div className="h-6 bg-muted rounded mb-4 loading-skeleton"></div>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-12 bg-muted rounded loading-skeleton"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`space-y-6 ${className || ''}`}>
      {/* Main content grid */}
      <div className="dashboard-content-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartPlaceholder title="Revenue Overview" height="h-80" />
        </div>
        <div className="space-y-6">
          <RecentActivity activities={activities} />
        </div>
      </div>

      {/* Secondary content */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartPlaceholder title="User Growth" />
        <QuickActions actions={quickActions} />
      </div>

      {/* Full width chart */}
      <ChartPlaceholder title="Performance Metrics" height="h-96" />
    </div>
  );
};