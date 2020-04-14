import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheck } from "react-icons/fa";

const Todo = ({ todo, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todo.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheck />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todo;
