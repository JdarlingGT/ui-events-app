import React from 'react';
import { DashboardMetric, DashboardStatsProps } from '../types/dashboard';

// TODO: Import from shadcn/ui when available
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { TrendingUp, TrendingDown, Users, DollarSign, Activity, CreditCard } from 'lucide-react';

interface StatCardProps extends DashboardMetric {}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, trend, icon, color }) => {
  return (
    <div className="stat-card">
      <div className="p-6">
        <div className="flex items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon && <span className="text-2xl">{icon}</span>}
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && (
            <div className={`flex items-center text-xs ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <span className="mr-1">{trend.isPositive ? '↗️' : '↘️'}</span>
              {trend.value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  className,
  metrics,
  isLoading = false
}) => {
  // Default metrics if none provided
  const defaultMetrics: DashboardMetric[] = [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: '$45,231.89',
      description: '+20.1% from last month',
      trend: { value: '+20.1%', isPositive: true },
      icon: '💰'
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '2,350',
      description: '+180.1% from last month',
      trend: { value: '+180.1%', isPositive: true },
      icon: '👥'
    },
    {
      id: 'sales',
      title: 'Sales',
      value: '+12,234',
      description: '+19% from last month',
      trend: { value: '+19%', isPositive: true },
      icon: '💳'
    },
    {
      id: 'active',
      title: 'Active Now',
      value: '573',
      description: '+201 since last hour',
      trend: { value: '+201', isPositive: true },
      icon: '📊'
    }
  ];

  const statsToShow = metrics || defaultMetrics;

  if (isLoading) {
    return (
      <div className={`dashboard-stats grid gap-4 ${className || ''}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="dashboard-card">
            <div className="p-6">
              <div className="h-4 bg-muted rounded mb-2 loading-skeleton"></div>
              <div className="h-8 bg-muted rounded mb-1 loading-skeleton"></div>
              <div className="h-3 bg-muted rounded loading-skeleton"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`dashboard-stats grid gap-4 ${className || ''}`}>
      {statsToShow.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  );
};