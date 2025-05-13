import React, { useState, useEffect } from 'react';
import Todolist from './todolist';
import Todo from './todo';

const App = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  const onAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index)); 
  };

  
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <Todolist onAddTodo={onAddTodo} />
      <Todo todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
};

export default App;
