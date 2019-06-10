import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <ul className="todo_list">
      <TodoListItem />
    </ul>
  );
};

export default TodoList;
