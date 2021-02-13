import React from "react";
import TodoLisItem from "./todo-list-item";

const TodoList = ({todos}) => {

  const elements = todos.map((item) => {
    const {id, ... itemProps} = item;

    return (
      <li key={id}>
        <TodoLisItem {... itemProps} />
      </li>
    );
  });

  return (
    <ul>
      {elements}
    </ul>
  )
};

export default TodoList;
