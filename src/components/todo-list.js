import React from "react";
import TodoLisItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li><TodoLisItem /></li>
      <li><TodoLisItem /></li>
    </ul>
  )
};

export default TodoList;
