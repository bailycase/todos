import React, { useState, useContext } from 'react';
import { addTodo } from '../context/reducers';
import { TodoContext } from '../context/TodoContext';

const useInput = () => {
  const dispatch = useContext(TodoContext);
  const [values, setValues] = useState('');
  // Form Errors
  const [errors, addError] = useState({});
  // Validate forms before submitting
  const validateInput = () => {
    if (values === '') {
      addError('Something is required');
    } else {
      addError('');
    }
  };

  // Handle Submitting the data to the ToDo List
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues('');
    addTodo(values, dispatch);

    // return validateInput(values);
  };

  // Handle Changing of the input field
  const handleChange = (e) => {
    e.persist();
    setValues(() => e.target.value);
  };
  return {
    handleSubmit,
    values,
    handleChange,
    errors,
  };
};

export default useInput;
