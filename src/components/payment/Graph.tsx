import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const exampleData = [
  { month: "3월", amount: 100000, count: 10 },
  { month: "4월", amount: 145000, count: 12 },
  { month: "5월", amount: 20000, count: 3 },
  { month: "6월", amount: 200000, count: 19 },
  { month: "7월", amount: 300000, count: 13 },
  { month: "8월", amount: 210000, count: 14 },
];

const config = {
  amount: {
    label: "결제 금액",
    color: "#2563eb",
  },
  count: {
    label: "결제 횟수",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function Graph() {
  return (
    <ChartContainer config={config} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={exampleData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          // tickMargin={10}
          axisLine={false}
          // tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="amount" fill="var(--color-amount)" radius={4} />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
