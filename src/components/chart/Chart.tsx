import './Chart.css';
import { ChartBar } from './ChartBar';

interface ChartProps {
  data: DataPoint[];
}

export interface DataPoint {
  value: number;
  label: string;
}

export const Chart: React.FC<ChartProps> = (props) => {
  const maxValue = props.data.reduce(
    (currentMax, dataPoint) => Math.max(currentMax, dataPoint.value),
    0
  );
  return (
    <div className="chart">
      {props.data.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
