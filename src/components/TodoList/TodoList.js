import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";
import PropTypes from "prop-types";

const TodoList = props => {
  const elements = props.todos.map(item => (
    <TodoListItem label={item.label} key={item.id} important={item.important} />
  ));
  return <ul className="todo_list">{elements} </ul>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
};

export default TodoList;
