import { ListProps } from 'modules/types';

const List = ({ children, style }: ListProps) => {
  return <ul className={style ? `${style} list` : 'list'}>{children}</ul>;
};
export default List;
