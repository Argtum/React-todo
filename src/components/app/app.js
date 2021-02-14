import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAdd from "../item-add";
import "./app.css";

export default class App extends Component {
  currentId = 4;

  state = {
    todoData: [
      {label: "Drink coffee", important: false, id: 1},
      {label: "Make Awesome App", important: true, id: 2},
      {label: "Have a lunch", important: false, id: 3},
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ]
      }
    })
  };

  addItem = (text) => {
    this.setState(({todoData}) => {

      return {
        todoData: [
          ...todoData,
          {label: text, important: false, id: this.currentId++}
        ]
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos = {this.state.todoData}
          onDeleted = {this.deleteItem}
        />
        <ItemAdd
          onAddItem = {this.addItem}
        />
      </div>
    )
  }
};
