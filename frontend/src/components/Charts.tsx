import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data for charts
const data = [
  { name: "Jan", events: 4000, venues: 2400, providers: 2400 },
  { name: "Feb", events: 3000, venues: 1398, providers: 2210 },
  { name: "Mar", events: 2000, venues: 9800, providers: 2290 },
  { name: "Apr", events: 2780, venues: 3908, providers: 2000 },
  { name: "May", events: 1890, venues: 4800, providers: 2181 },
  { name: "Jun", events: 2390, venues: 3800, providers: 2500 },
  { name: "Jul", events: 3490, venues: 4300, providers: 2100 },
];

const pieData = [
  { name: "Events", value: 400 },
  { name: "Venues", value: 300 },
  { name: "Providers", value: 300 },
  { name: "Tasks", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function EventChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Analytics</CardTitle>
        <CardDescription>Monthly overview of events, venues, and providers</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="events" fill="#8884d8" />
            <Bar dataKey="venues" fill="#82ca9d" />
            <Bar dataKey="providers" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function TrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trend Analysis</CardTitle>
        <CardDescription>Monthly trends for key metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="events" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="venues" stroke="#82ca9d" />
            <Line type="monotone" dataKey="providers" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function DistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribution</CardTitle>
        <CardDescription>Distribution of different entities</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}