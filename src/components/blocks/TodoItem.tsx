import { TodoItemProps } from 'modules/types';
import { memo } from 'react';

import classes from './TodoItem.module.css';

const TodoItem = memo((props: TodoItemProps) => {
  const { item, onCheck } = props;
  const handleChange = () => onCheck(item);
  return (
    <>
      <li className={classes.todoCheckbox_block}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={handleChange}
          id={item.key}
          className={classes.todoCheckbox}
        />
        <label
          htmlFor={item.key}
          className={
            item.done
              ? `${classes.todoCheckbox_label_done} ${classes.todoCheckbox_label}`
              : classes.todoCheckbox_label
          }
        >
          <span className={classes.todocheckbox_text}>{item.text}</span>
        </label>
      </li>
    </>
  );
});
TodoItem.displayName = 'TodoItem';
export default TodoItem;
