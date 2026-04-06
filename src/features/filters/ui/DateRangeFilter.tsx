// src/features/filters/ui/DateRangeFilter.tsx
import "./DateRangeFilter.css"; // подключим стили

interface DateRangeFilterProps {
  preset: "7d" | "30d" | "90d" | "custom";
  onPresetChange: (preset: "7d" | "30d" | "90d" | "custom") => void;
  customFrom: string;
  onCustomFromChange: (date: string) => void;
  customTo: string;
  onCustomToChange: (date: string) => void;
}

export const DateRangeFilter = ({
  preset,
  onPresetChange,
  customFrom,
  onCustomFromChange,
  customTo,
  onCustomToChange,
}: DateRangeFilterProps) => {
  return (
    <div className="date-range-filter">
      <div className="presets">
        {(["7d", "30d", "90d"] as const).map((p) => (
          <button
            key={p}
            className={`preset-btn ${preset === p ? "active" : ""}`}
            onClick={() => onPresetChange(p)}
          >
            {p === "7d" && "7 дней"}
            {p === "30d" && "30 дней"}
            {p === "90d" && "90 дней"}
          </button>
        ))}
        <button
          className={`preset-btn ${preset === "custom" ? "active" : ""}`}
          onClick={() => onPresetChange("custom")}
        >
          Свой период
        </button>
      </div>

      {preset === "custom" && (
        <div className="custom-range">
          <label>
            С:{" "}
            <input
              type="date"
              value={customFrom}
              onChange={(e) => onCustomFromChange(e.target.value)}
            />
          </label>
          <label>
            По:{" "}
            <input
              type="date"
              value={customTo}
              onChange={(e) => onCustomToChange(e.target.value)}
            />
          </label>
        </div>
      )}
    </div>
  );
};
