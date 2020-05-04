import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./Todo";
import TodoForm from "./TodoForm";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todo");
    console.log({ localStorage });
    if (localTodos) {
      setTodo(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todos) => {
    setTodo([...todo, todos]);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const markComplete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todo With Local Storage</h1>
      <br />
      <br />
      <Todos todo={todo} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
