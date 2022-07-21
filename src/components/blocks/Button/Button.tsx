import { ButtonProps } from 'modules/types';

import classes from './Button.module.css';

export const Button = (props: ButtonProps) => {
  const { children, onClick, style, icon, alt } = props;
  return (
    <button
      className={
        style
          ? `${classes.buttonBase} ${style} fadeScaleUp`
          : `${classes.buttonBase} fadeScaleUp`
      }
      onClick={onClick}
      data-test={
        children === '完了済みを削除'
          ? 'buttonDelDone'
          : children === 'TODOリストを削除'
          ? 'buttonTodoClear'
          : null
      }
    >
      {icon ? <img src={icon} alt={alt} className={classes.buttonBase_icon} /> : null}
      {children}
    </button>
  );
};
Button.displayName = 'Button';
