// src/shared/ui/MetricCard.tsx
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: 'up' | 'down';
  subtitle?: string;
}

export const MetricCard = ({ title, value, trend, subtitle }: MetricCardProps) => {
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '14px', color: '#666' }}>{title}</div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', margin: '8px 0' }}>
        {value}
      </div>
      {subtitle && <div style={{ fontSize: '12px', color: '#999' }}>{subtitle}</div>}
      {trend && (
        <div style={{ color: trend === 'up' ? '#28a745' : '#dc3545', fontSize: '12px' }}>
          {trend === 'up' ? '↑' : '↓'} за неделю
        </div>
      )}
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  minWidth: '200px',
};