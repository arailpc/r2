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
  }

  render() {
    return (
      <div className="app">
        <Todolist todos={this.todos} />
      </div>
    );
  }
}
