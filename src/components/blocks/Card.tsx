import { CardProps } from 'modules/types';

import classes from './Card.module.css';

const Card = ({ children }: CardProps) => {
  return <div className={`${classes.cardBase} fadeInScaleUp`}>{children}</div>;
};
Card.displayName = 'Card';
export default Card;
