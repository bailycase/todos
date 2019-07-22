/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { TodoContainer } from './components/Todo';
import { TodoProvider } from './components/context/TodoContext';

export default function Index() {
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO': {
        const newTodo = {
          name: action.name,
        };
        return [{ ...newTodo }, ...state];
      }
      case 'REMOVE_TODO': {
        return state.filter(x => x.name !== action.name);
      }
      default:
        console.log(state, action);
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <TodoProvider value={dispatch}>
      <TodoContainer todos={todos} />
    </TodoProvider>
  );
}
const renderNode = document.getElementById('content');
ReactDOM.render(<Index />, renderNode);
