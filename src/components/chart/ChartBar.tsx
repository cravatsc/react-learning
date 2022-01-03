import './ChartBar.css';

interface ChartBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export const ChartBar: React.FC<ChartBarProps> = (props) => {
  //used to dynamically set an html elements style
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
