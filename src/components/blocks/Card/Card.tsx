import { CardProps } from 'modules/types';

import classes from './Card.module.css';

export const Card = ({ children }: CardProps) => {
  return (
    <div aria-label="card" className={`${classes.cardBase} fadeInScaleUp`}>
      {children}
    </div>
  );
};
Card.displayName = 'Card';
