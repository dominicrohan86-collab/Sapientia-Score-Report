import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import type { GrowthPoint } from '../../types/report';

interface GrowthLineChartProps {
  growth: GrowthPoint[];
}

export function GrowthLineChart({ growth }: GrowthLineChartProps) {
  return (
    <ResponsiveContainer height={292} width="100%">
      <LineChart data={growth} margin={{ top: 10, right: 24, bottom: 10, left: 4 }}>
        <CartesianGrid stroke="#eadfc9" strokeDasharray="4 4" />
        <XAxis
          dataKey="label"
          padding={{ left: 18, right: 18 }}
          stroke="#41536f"
          tick={{ fill: '#41536f', fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          domain={[640, 810]}
          stroke="#41536f"
          tick={{ fill: '#41536f', fontSize: 12 }}
          tickLine={false}
          width={42}
        />
        <Tooltip
          contentStyle={{
            borderColor: '#eadfc9',
            borderRadius: 8,
            color: '#142033',
            boxShadow: '0 12px 30px rgba(20, 32, 51, 0.14)'
          }}
          labelStyle={{ color: '#142033', fontWeight: 700 }}
        />
        <Legend
          iconType="line"
          wrapperStyle={{ color: '#2d3d56', fontSize: 12, paddingTop: 8 }}
        />
        <Line
          activeDot={{ r: 6 }}
          dataKey="overallScore"
          dot={{ r: 4, strokeWidth: 2 }}
          name="Overall"
          stroke="#142033"
          strokeWidth={3}
          type="monotone"
        />
        <Line
          dataKey="logic"
          dot={{ r: 3 }}
          name="Logic"
          stroke="#54775d"
          strokeDasharray="5 4"
          strokeWidth={2}
          type="monotone"
        />
        <Line
          dataKey="grammar"
          dot={{ r: 3 }}
          name="Grammar"
          stroke="#9c6316"
          strokeDasharray="3 4"
          strokeWidth={2}
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
