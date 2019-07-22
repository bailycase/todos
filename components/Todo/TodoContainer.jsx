import React, { useState } from 'react';
import Todo from './Todo';
import useForm from './useForm';

export default (props) => {
  const {
 values, handleSubmit, handleChange, errors 
} = useForm();
  const { todos } = props;
  const removeTodo = (name) => {
    const newTodos = todos.filter(x => x.name !== name);
  };
  return (
    <div>
      <p>Container</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={values} />
        <input type="submit" value="submit" />
        {/* <div>{errors.name}</div> */}
      </form>
      {props.todos.map((props, key) => (
        <Todo {...props} key={key} remove={prop => removeTodo(prop)} />
      ))}
    </div>
  );
};
