import { createBrowserRouter } from "react-router-dom";
import {
  DashboardPage,
  EventsPage,
  VenuesPage,
  ProvidersPage,
  TasksPage,
  CalendarPage,
  SettingsPage,
} from "@/pages";

// Define your routes here
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/venues",
    element: <VenuesPage />,
  },
  {
    path: "/providers",
    element: <ProvidersPage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
]);