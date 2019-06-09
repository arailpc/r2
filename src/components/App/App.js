import React from "react";
import Todolist from "../TodoList/TodoList";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Todolist />
      </div>
    );
  }
}
