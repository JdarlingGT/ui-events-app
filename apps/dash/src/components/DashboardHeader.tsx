import React from 'react';
import { DashboardHeaderProps } from '../types/dashboard';

// TODO: Import from shadcn/ui when available
// import { Button } from '@/components/ui/button';
// import { Bell, Settings, User } from 'lucide-react';

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  className,
  title = "Command Center",
  showNotifications = true,
  showSettings = true,
  showUserMenu = true,
  onNotificationClick,
  onSettingsClick,
  onUserMenuClick
}) => {
  return (
    <header className={`dashboard-header ${className || ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>

          <div className="flex items-center space-x-4">
            {/* TODO: Add proper buttons when shadcn/ui is available */}
            {showNotifications && (
              <button
                className="quick-action-button p-2"
                onClick={onNotificationClick}
              >
                <span className="sr-only">Notifications</span>
                🔔
              </button>
            )}
            {showSettings && (
              <button
                className="quick-action-button p-2"
                onClick={onSettingsClick}
              >
                <span className="sr-only">Settings</span>
                ⚙️
              </button>
            )}
            {showUserMenu && (
              <button
                className="quick-action-button p-2"
                onClick={onUserMenuClick}
              >
                <span className="sr-only">User menu</span>
                👤
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};