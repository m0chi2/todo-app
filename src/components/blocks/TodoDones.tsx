import { TodoDonesProps } from 'modules/types';
import { memo } from 'react';

import classes from '.TodoDones.module.css';

const TodoDones = memo((props: TodoDonesProps) => {
  const { itemsDone } = props;
  return (
    <div className={classes.complete}>
      <div className={classes.todoDoneHeading}>完了済み 一覧</div>
      <ul className={classes.list}>
        {itemsDone.map((itemDone) => {
          <li key={itemDone.key} className={classes.item}>
            <span className={classes.done}>完了済み</span>
            {itemDone.text}
          </li>;
        })}
      </ul>
    </div>
  );
});

TodoDones.displayName = 'TodoDone';
export default TodoDones;
