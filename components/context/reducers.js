import React, { useContext } from 'react';

export const addTodo = (name, dispatch) => {
  dispatch({ type: 'ADD_TODO', name });
};

export const removeTodo = (name, dispatch) => {
  dispatch({ type: 'REMOVE_TODO', name });
};
