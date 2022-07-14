import iconDone from 'assets/images/icon-done.svg';
import { ListItemProps } from 'modules/types';

import classes from './ListItem.module.css';
const ListItem = ({ status, label }: ListItemProps) => {
  return (
    <li className={`${classes.listItem_block} fadeInUp`}>
      {status === 'done' && (
        <img src={iconDone} className={classes.listItem_icon} alt="" />
      )}
      <span className={classes.listItem_label}>{label}</span>
    </li>
  );
};
export default ListItem;
