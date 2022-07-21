import { TodoDonesProps } from 'modules/types';
import { memo } from 'react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import classes from './TodoDones.module.css';

export const TodoDones = memo((props: TodoDonesProps) => {
  const { itemsDone } = props;
  return (
    <div className="block" data-test="blockBottom">
      <h2 className={classes.todoDone_heading}>完了済み履歴</h2>
      <List>
        {itemsDone.map((itemDone) => {
          return <ListItem key={itemDone.key} status="done" label={itemDone.text} />;
        })}
      </List>
    </div>
  );
});

TodoDones.displayName = 'TodoDone';
