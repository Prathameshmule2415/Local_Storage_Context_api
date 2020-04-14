import React, { useState } from "react";
import {
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      alert("Please fille some value");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            id="todo"
            placeholder="Add Your To Do"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success">ADD TODO</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
