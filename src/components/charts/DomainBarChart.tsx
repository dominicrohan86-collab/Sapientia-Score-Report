import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import type { DomainResult } from '../../types/report';

interface DomainBarChartProps {
  domains: DomainResult[];
}

const bandColors = {
  strong: '#54775d',
  onTrack: '#426f8e',
  building: '#9c6316',
  watch: '#a4473f'
};

export function DomainBarChart({ domains }: DomainBarChartProps) {
  const data = domains.map((domain) => ({
    name: domain.name,
    shortName: domain.name.replace(' & ', ' / '),
    score: domain.score,
    band: domain.band.label,
    tone: domain.band.tone
  }));

  return (
    <ResponsiveContainer height={280} width="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 42, bottom: 10, left: 8 }}
      >
        <CartesianGrid horizontal={false} stroke="#eadfc9" />
        <XAxis
          dataKey="score"
          domain={[600, 820]}
          stroke="#41536f"
          tick={{ fill: '#41536f', fontSize: 12 }}
          tickLine={false}
          type="number"
        />
        <YAxis
          dataKey="shortName"
          stroke="#41536f"
          tick={{ fill: '#2d3d56', fontSize: 12 }}
          tickLine={false}
          type="category"
          width={148}
        />
        <Tooltip
          contentStyle={{
            borderColor: '#eadfc9',
            borderRadius: 8,
            color: '#142033',
            boxShadow: '0 12px 30px rgba(20, 32, 51, 0.14)'
          }}
          formatter={(value, _name, props) => [
            `${value} (${props.payload.band})`,
            'Score'
          ]}
          labelStyle={{ color: '#142033', fontWeight: 700 }}
        />
        <Bar dataKey="score" radius={[0, 6, 6, 0]} barSize={24}>
          {data.map((entry) => (
            <Cell fill={bandColors[entry.tone as keyof typeof bandColors]} key={entry.name} />
          ))}
          <LabelList
            dataKey="score"
            fill="#142033"
            fontSize={12}
            fontWeight={700}
            position="right"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
