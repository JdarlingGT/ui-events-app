import { Card, Title, Text, BarChart, LineChart, AreaChart } from "@tremor/react";

// Sample data for charts
const data = [
  { date: "Jan 23", events: 45, venues: 30, providers: 20 },
  { date: "Feb 23", events: 52, venues: 35, providers: 25 },
  { date: "Mar 23", events: 48, venues: 40, providers: 30 },
  { date: "Apr 23", events: 60, venues: 45, providers: 35 },
  { date: "May 23", events: 65, venues: 50, providers: 40 },
  { date: "Jun 23", events: 70, venues: 55, providers: 45 },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export function TremorBarChart() {
  return (
    <Card>
      <Title>Event Metrics</Title>
      <Text>Monthly performance indicators</Text>
      <BarChart
        data={data}
        index="date"
        categories={["events", "venues", "providers"]}
        colors={["blue", "cyan", "indigo"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
        className="mt-6"
      />
    </Card>
  );
}

export function TremorLineChart() {
  return (
    <Card>
      <Title>Trend Analysis</Title>
      <Text>Monthly trends for key metrics</Text>
      <LineChart
        data={data}
        index="date"
        categories={["events", "venues", "providers"]}
        colors={["blue", "cyan", "indigo"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
        className="mt-6"
      />
    </Card>
  );
}

export function TremorAreaChart() {
  return (
    <Card>
      <Title>Distribution Overview</Title>
      <Text>Cumulative distribution of entities</Text>
      <AreaChart
        data={data}
        index="date"
        categories={["events", "venues", "providers"]}
        colors={["blue", "cyan", "indigo"]}
        valueFormatter={valueFormatter}
        showAnimation={true}
        className="mt-6"
      />
    </Card>
  );
}