import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAdd from "../item-add";
import "./app.css";

export default class App extends Component {
  currentId = 0;

  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.currentId++
    }
  }

  state = {
    todoData: [
      this.createTodoItem(`Drink coffee`),
      this.createTodoItem(`Make Awesome App`),
      this.createTodoItem(`Have a lunch`)
    ],
    filter: 'all',
    search: ''
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
    });
  };

  addItem = (text) => {
    this.setState(({todoData}) => {
      return {
        todoData: [
          ...todoData,
          this.createTodoItem(text)
        ]
      }
    });
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];

    return [
      ...arr.slice(0, idx),
      {...oldItem, [propName]: !oldItem[propName]},
      ...arr.slice(idx + 1)
    ]
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `important`)
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `done`)
      }
    })
  };

  changeFilter = (filterValue) => {
    this.setState(() => {
      return {
        filter: filterValue
      }
    })
  }

  onSearch = (search) => {
    this.setState(() => {
      return {
        search: search
      }
    })
  }

  render() {
    const {todoData, filter, search} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    let filteredData = todoData;

    if (filter === 'done') {
      filteredData = todoData.filter((el) => el.done);
    } else if (filter === 'active') {
      filteredData = todoData.filter((el) => !el.done);
    }

    if (search !== '') {
      filteredData = filteredData.filter((el) => el.label.indexOf(search) >= 0);
    }

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch = {this.onSearch} />
          <ItemStatusFilter onChangeFilter = {this.changeFilter} />
        </div>
        <TodoList
          todos = {filteredData}
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
        />
        <ItemAdd
          onAddItem = {this.addItem}
        />
      </div>
    )
  }
};
