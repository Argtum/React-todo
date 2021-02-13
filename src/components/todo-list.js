import React from "react";
import TodoLisItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li><TodoLisItem label="Drink Coffee" /></li>
      <li><TodoLisItem label="Build React App" important /></li>
    </ul>
  )
};

export default TodoList;
