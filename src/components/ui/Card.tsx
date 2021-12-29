import './Card.css';

interface CardProps {
  className: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};
