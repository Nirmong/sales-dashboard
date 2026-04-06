// src/pages/DashboardPage/DashboardPage.tsx
import { MetricCard } from "@/shared/ui/MetricCard";
import { RevenueChart } from "@/features/charts/ui/RevenueChart";
import { mockRevenueData } from "@/entities/sale/lib/mockRevenueData";

export const DashboardPage = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>Аналитика продаж</h1>

      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "32px",
        }}
      >
        <MetricCard title="Выручка" value="₽248 500" trend="up" />
        <MetricCard title="Заказы" value="1 248" trend="up" />
        <MetricCard title="Конверсия" value="4.2%" trend="down" />
        <MetricCard title="Средний чек" value="₽199" />
      </div>

      <div style={{ marginBottom: "32px" }}>
        <RevenueChart data={mockRevenueData} />
      </div>
    </div>
  );
};
