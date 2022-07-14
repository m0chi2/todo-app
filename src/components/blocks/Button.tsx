import { ButtonProps } from 'modules/types';

import classes from './Button.module.css';

const Button = (props: ButtonProps) => {
  const { children, onClick, style, icon, alt } = props;
  return (
    <button
      className={style ? `${classes.buttonBase} ${style} fadeScaleUp` : `${classes.buttonBase} fadeScaleUp`}
      onClick={onClick}
    >
      {icon? <img src={icon} alt={alt} className={classes.buttonBase_icon}/>: null}
      {children}
    </button>
  );
};
Button.displayName = 'Button';
export default Button;
