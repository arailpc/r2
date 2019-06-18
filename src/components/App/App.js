import React from "react";
import Todolist from "../TodoList/TodoList";
import "./App.css";
import { uniqueNumber } from "../../utils.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.todos = [
      { label: "learn React", id: uniqueNumber(), important: true },
      { label: "make awesome app", id: uniqueNumber(), important: false }
    ];
    this.onClickImportant = id => {
      const n = this.todos.findIndex(item => id === item.id);
      this.todos[n].important = true;
      console.log(this.todos);
    };
  }

  render() {
    return (
      <div className="app">
        <Todolist todos={this.todos} onClickImportant={this.onClickImportant} />
      </div>
    );
  }
}
