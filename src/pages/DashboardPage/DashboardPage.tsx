// src/pages/DashboardPage/DashboardPage.tsx
import { useMemo } from "react";
import { MetricCard } from "@/shared/ui/MetricCard";
import { RevenueChart } from "@/features/charts/ui/RevenueChart";
import { DateRangeFilter } from "@/features/filters/ui/DateRangeFilter";
import { useDateRange } from "@/features/filters/model/useDateRange";
import { isWithinInterval } from "date-fns";
import { mockRevenueData } from "@/entities/sale/lib/mockRevenueData";

export const DashboardPage = () => {
  const dateRange = useDateRange();

  // Фильтруем данные по выбранному диапазону
  const filteredData = useMemo(() => {
    return mockRevenueData.filter((point) => {
      const pointDate = new Date(point.date);
      return isWithinInterval(pointDate, {
        start: dateRange.range.from,
        end: dateRange.range.to,
      });
    });
  }, [dateRange.range]);

  // Рассчитываем агрегированные метрики
  const totalRevenue = filteredData.reduce((sum, d) => sum + d.revenue, 0);
  const avgRevenue = filteredData.length
    ? Math.round(totalRevenue / filteredData.length)
    : 0;

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>Аналитика продаж</h1>

      {/* Фильтр */}
      <DateRangeFilter
        preset={dateRange.preset}
        onPresetChange={dateRange.setPreset}
        customFrom={dateRange.customFrom}
        onCustomFromChange={dateRange.setCustomFrom}
        customTo={dateRange.customTo}
        onCustomToChange={dateRange.setCustomTo}
      />

      {/* Метрики */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "32px",
        }}
      >
        <MetricCard
          title="Выручка"
          value={`₽${totalRevenue.toLocaleString()}`}
        />
        <MetricCard
          title="Средняя выручка/день"
          value={`₽${avgRevenue.toLocaleString()}`}
        />
        <MetricCard title="Дней в выборке" value={filteredData.length} />
      </div>

      {/* График */}
      <div style={{ marginBottom: "32px" }}>
        <RevenueChart data={filteredData} />
      </div>
    </div>
  );
};
