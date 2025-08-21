// Dashboard component types and interfaces

export interface DashboardMetric {
  id: string;
  title: string;
  value: string | number;
  description: string;
  trend?: {
    value: string;
    isPositive: boolean;
    percentage?: number;
  };
  icon?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export interface ActivityItem {
  id: string | number;
  action: string;
  time: string;
  type: 'user' | 'payment' | 'report' | 'system' | 'order' | 'general';
  user?: {
    name: string;
    avatar?: string;
  };
  metadata?: Record<string, any>;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ChartData {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'pie' | 'area' | 'donut';
  data: any[]; // TODO: Define more specific chart data types
  config?: {
    height?: number;
    colors?: string[];
    showLegend?: boolean;
    showGrid?: boolean;
  };
}

export interface DashboardConfig {
  title: string;
  description?: string;
  metrics: DashboardMetric[];
  charts: ChartData[];
  quickActions: QuickAction[];
  recentActivities: ActivityItem[];
  refreshInterval?: number; // in milliseconds
}

export interface DashboardState {
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  data: DashboardConfig | null;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface DashboardApiResponse extends ApiResponse<DashboardConfig> {}

// Component prop types
export interface DashboardProps {
  className?: string;
  config?: Partial<DashboardConfig>;
  onRefresh?: () => void;
}

export interface DashboardHeaderProps {
  className?: string;
  title?: string;
  showNotifications?: boolean;
  showSettings?: boolean;
  showUserMenu?: boolean;
  onNotificationClick?: () => void;
  onSettingsClick?: () => void;
  onUserMenuClick?: () => void;
}

export interface DashboardStatsProps {
  className?: string;
  metrics?: DashboardMetric[];
  isLoading?: boolean;
}

export interface DashboardContentProps {
  className?: string;
  charts?: ChartData[];
  activities?: ActivityItem[];
  quickActions?: QuickAction[];
  isLoading?: boolean;
}

// Utility types
export type DashboardTheme = 'light' | 'dark' | 'system';
export type DashboardLayout = 'default' | 'compact' | 'wide';

export interface DashboardSettings {
  theme: DashboardTheme;
  layout: DashboardLayout;
  autoRefresh: boolean;
  refreshInterval: number;
  showAnimations: boolean;
}