import React from "react";
import Todolist from "../TodoList/TodoList";
import "./App.css";
import { uniqueNumber } from "../../utils.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { label: "learn React", id: uniqueNumber(), important: true, done: false },
        { label: "make awesome app", id: uniqueNumber(), important: false, done: true },
        { label: "have a lanch", id: uniqueNumber(), important: false, done: false },
        { label: "drink coffee", id: uniqueNumber(), important: false, done: false }
      ]
    };
    this.onClickImportant = id => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(el => (id === el.id ? { ...el, important: !el.important } : el))
        };
      });
    };
    this.onClickDelete = id => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.filter(el => id !== el.id)
        };
      });
    };
    this.changeDone = id => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(el => (id === el.id ? { ...el, done: !el.done } : el))
        };
      });
    };
  }

  render() {
    return (
      <div className="app">
        <Todolist
          todos={this.state.todos}
          onClickImportant={this.onClickImportant}
          onClickDelete={this.onClickDelete}
          changeDone={this.changeDone}
        />
      </div>
    );
  }
}
