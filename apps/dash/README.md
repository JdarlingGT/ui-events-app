# Dashboard Component Structure

This directory contains a basic React component structure for the Dashboard page, built with TypeScript and following shadcn/ui design patterns.

## Structure

```
apps/dash/src/
├── components/
│   ├── DashboardHeader.tsx    # Header with navigation and controls
│   ├── DashboardStats.tsx     # Statistics cards component
│   ├── DashboardContent.tsx   # Main content area with charts and activities
│   └── Layout.tsx            # Basic layout wrapper
├── pages/
│   ├── Dashboard.tsx         # Main dashboard page component
│   └── Example.tsx          # Example page
├── styles/
│   └── dashboard.css        # Dashboard-specific styles following shadcn/ui patterns
└── types/
    └── dashboard.ts         # TypeScript interfaces and types
```

## Components

### Dashboard (Main Component)
- **File**: `pages/Dashboard.tsx`
- **Purpose**: Main dashboard page that orchestrates all dashboard components
- **Props**: Accepts optional configuration and refresh callback
- **Features**:
  - Configurable title and description
  - Optional refresh functionality
  - Responsive layout

### DashboardHeader
- **File**: `components/DashboardHeader.tsx`
- **Purpose**: Top navigation bar with controls
- **Features**:
  - Configurable title
  - Optional notification, settings, and user menu buttons
  - Click handlers for all actions

### DashboardStats
- **File**: `components/DashboardStats.tsx`
- **Purpose**: Display key metrics in card format
- **Features**:
  - Responsive grid layout (1-4 columns based on screen size)
  - Trend indicators with icons
  - Loading state with skeleton animation
  - Default metrics if none provided

### DashboardContent
- **File**: `components/DashboardContent.tsx`
- **Purpose**: Main content area with charts, activities, and quick actions
- **Features**:
  - Chart placeholders with integration notes
  - Recent activity feed
  - Quick action buttons
  - Responsive grid layout
  - Loading states

## TypeScript Types

All components use proper TypeScript interfaces defined in `types/dashboard.ts`:

- `DashboardProps` - Main dashboard component props
- `DashboardMetric` - Individual metric/stat card data
- `ActivityItem` - Recent activity item structure
- `QuickAction` - Quick action button configuration
- `ChartData` - Chart configuration (placeholder for future integration)
- `DashboardConfig` - Complete dashboard configuration object

## Styling

The dashboard uses a custom CSS file (`styles/dashboard.css`) that follows shadcn/ui patterns:

- CSS custom properties for theming
- Light and dark mode support
- Responsive design utilities
- Component-specific classes
- Loading animations
- Accessibility improvements

### Key CSS Classes

- `.dashboard-container` - Main dashboard wrapper
- `.dashboard-header` - Header styling with backdrop blur
- `.dashboard-card` - Card component base styles
- `.stat-card` - Statistics card with hover effects
- `.chart-placeholder` - Chart placeholder styling
- `.activity-item` - Activity list item
- `.quick-action-button` - Action button styling
- `.loading-skeleton` - Loading animation

## Usage

```tsx
import Dashboard from './pages/Dashboard';
import { DashboardConfig } from './types/dashboard';

// Basic usage
<Dashboard />

// With configuration
const config: Partial<DashboardConfig> = {
  title: "My Dashboard",
  description: "Custom dashboard description",
  metrics: [
    {
      id: 'revenue',
      title: 'Revenue',
      value: '$12,345',
      description: 'Monthly revenue',
      trend: { value: '+15%', isPositive: true },
      icon: '💰'
    }
  ]
};

<Dashboard
  config={config}
  onRefresh={() => console.log('Refreshing...')}
/>
```

## Features

### ✅ Implemented
- Structured component architecture
- TypeScript interfaces and types
- Responsive design
- Loading states
- Basic styling following shadcn/ui patterns
- Accessibility considerations
- Dark/light mode support (CSS variables)

### 🚧 TODO (Integration Pending)
- Actual shadcn/ui component imports
- Real chart integration (Chart.js, Recharts, etc.)
- API integration for data fetching
- Authentication integration
- Real notification system
- Settings panel
- User profile integration

## Integration Notes

The components are designed to be easily integrated with:

1. **shadcn/ui**: Replace TODO comments with actual component imports
2. **Charts**: Replace chart placeholders with real chart libraries
3. **API**: Use the TypeScript interfaces for API integration
4. **Cloudflare Workers**: Components are compatible with static builds
5. **State Management**: Can be easily integrated with React Context, Redux, or Zustand

## Responsive Breakpoints

- Mobile: Single column layout
- Tablet (768px+): 2-column stats grid
- Desktop (1024px+): 4-column stats grid, complex layouts

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Safari 9+ (with webkit prefixes for backdrop-filter)
- Supports prefers-reduced-motion for accessibility
