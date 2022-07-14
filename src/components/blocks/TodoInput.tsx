import { TodoInputProps } from 'modules/types';
import { ChangeEvent, KeyboardEvent, memo, useCallback } from 'react';

import classes from './TodoInput.module.css';

const TodoInput = memo((props: TodoInputProps) => {
  const { text, setText, typing, setTyping, onAdd } = props;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    [setText],
  );
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!text) return;
    if (e.key !== 'Enter' || typing) return;
    onAdd(text);
    setText('');
  };
  return (
    <div className={`block ${classes.todoInput_block}`}>
      <input
        className={classes.todoInput}
        type="text"
        placeholder="タスクを入力してEnterを押してね"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setTyping(true)}
        onCompositionEnd={() => setTyping(false)}
      />
    </div>
  );
});
TodoInput.displayName = 'TodoInput';
export default TodoInput;
