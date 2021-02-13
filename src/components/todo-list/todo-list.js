import React from "react";
import TodoLisItem from "../todo-list-item";
import "./todo-list.css"

const TodoList = ({todos}) => {

  const elements = todos.map((item) => {
    const {id, ... itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <TodoLisItem {... itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
};

export default TodoList;
