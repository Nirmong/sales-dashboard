// src/features/charts/ui/RevenueChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";

// Тип данных для графика
interface RevenueDataPoint {
  date: string; // ISO-строка или 'YYYY-MM-DD'
  revenue: number;
}

interface RevenueChartProps {
  data: RevenueDataPoint[];
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <div
      style={{
        height: "300px",
        background: "white",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ marginBottom: "16px" }}>Выручка по дням</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) =>
              format(new Date(date), "dd MMM", { locale: ru })
            }
          />
          <YAxis tickFormatter={(value) => `₽${(value / 1000).toFixed(0)}k`} />
          <Tooltip
            formatter={(value) => [
              `₽${Number(value).toLocaleString()}`,
              "Выручка",
            ]}
            labelFormatter={(date) =>
              format(new Date(date), "dd MMMM yyyy", { locale: ru })
            }
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
