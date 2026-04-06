// src/entities/sale/lib/mockRevenueData.ts
import { addDays, format } from "date-fns";

export const generateRevenueData = (days = 30) => {
  const data = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(today, -i);
    const revenue = 150_000 + Math.floor(Math.random() * 100_000); // от 150k до 250k
    data.push({
      date: format(date, "yyyy-MM-dd"),
      revenue,
    });
  }

  return data;
};

// Экспортируем готовые данные для быстрого старта
export const mockRevenueData = generateRevenueData();
