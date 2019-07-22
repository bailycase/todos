import React, { useContext } from 'react';
import { removeTodo } from '../context/reducers';

import { TodoContext } from '../context/TodoContext';

export default props => {
  const dispatch = useContext(TodoContext);
  const { name, remove } = props;
  return (
    <div>
      <button onClick={() => removeTodo(name, dispatch)}>Remove</button>
      <span>{name}</span>
    </div>
  );
};
