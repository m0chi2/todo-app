import { ListProps } from 'modules/types';

export const List = ({ children, style }: ListProps) => {
  return (
    <ul className={style ? `${style} list` : 'list'} data-test="list">
      {children}
    </ul>
  );
};
