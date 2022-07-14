import { ListProps } from 'modules/types';

import classes from './List.module.css';

const List = ({ children, style }: ListProps) => {
  return <ul className={style? `${style} list` : 'list'}>{children}</ul>;
};
export default List;
