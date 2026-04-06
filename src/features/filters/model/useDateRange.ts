// src/features/filters/model/useDateRange.ts
import { useState, useMemo } from "react";
import { startOfDay, subDays } from "date-fns";

export type Preset = "7d" | "30d" | "90d" | "custom";

interface DateRange {
  from: Date;
  to: Date;
}

const today = startOfDay(new Date());

const getDefaultRange = (preset: Preset): DateRange => {
  switch (preset) {
    case "7d":
      return { from: subDays(today, 6), to: today };
    case "30d":
      return { from: subDays(today, 29), to: today };
    case "90d":
      return { from: subDays(today, 89), to: today };
    default:
      return { from: subDays(today, 29), to: today };
  }
};

export const useDateRange = () => {
  const [preset, setPreset] = useState<Preset>("30d");
  const [customFrom, setCustomFrom] = useState<string>("");
  const [customTo, setCustomTo] = useState<string>("");

  const range = useMemo(() => {
    if (preset === "custom") {
      const from = customFrom ? new Date(customFrom) : subDays(today, 29);
      const to = customTo ? new Date(customTo) : today;
      return { from: startOfDay(from), to: startOfDay(to) };
    }
    return getDefaultRange(preset);
  }, [preset, customFrom, customTo]);

  return {
    preset,
    setPreset,
    customFrom,
    setCustomFrom,
    customTo,
    setCustomTo,
    range,
  };
};
