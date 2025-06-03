import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 15000 },
  { month: 'Mar', revenue: 10000 },
  { month: 'Apr', revenue: 17000 },
  { month: 'May', revenue: 25000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 backdrop-blur-sm px-5 py-3 border border-slate-700/50 rounded-xl shadow-2xl">
        <p className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-lg font-light text-white">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const avgRevenue = totalRevenue / data.length;

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-xl p-8 shadow-xl shadow-slate-900/5 backdrop-blur-sm mb-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extralight text-slate-900 tracking-tight">
            Revenue Analytics
          </h1>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-slate-500/80 font-light tracking-wide">
          Financial performance • Q1-Q2 2024
        </p>
      </div>
      
      <div className="h-96 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            barCategoryGap="35%"
          >
            <CartesianGrid 
              strokeDasharray="1 3" 
              stroke="#e2e8f0" 
              strokeOpacity={0.3}
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 13, 
                fill: '#64748b', 
                fontWeight: 300,
                letterSpacing: '0.05em'
              }}
              dy={15}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ 
                fontSize: 12, 
                fill: '#94a3b8', 
                fontWeight: 300
              }}
              tickFormatter={(value) => `${value / 1000}K`}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }} />
            <Bar 
              dataKey="revenue" 
              fill="url(#premiumGradient)"
              radius={[6, 6, 0, 0]}
              maxBarSize={32}
            />
            <defs>
              <linearGradient id="premiumGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" stopOpacity={1} />
                <stop offset="50%" stopColor="#334155" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#475569" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-200/50">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-medium">
            Total Revenue
          </p>
          <p className="text-2xl font-extralight text-slate-900">
            ${totalRevenue.toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-medium">
            Average
          </p>
          <p className="text-2xl font-extralight text-slate-900">
            ${Math.round(avgRevenue).toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-medium">
            Growth Trend
          </p>
          <p className="text-2xl font-extralight text-emerald-600">
            +12.5%
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-6 pt-4">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
          <span className="text-xs text-slate-400 font-light tracking-wider uppercase">
            Premium Analytics
          </span>
          <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;