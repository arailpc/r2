import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";
import PropTypes from "prop-types";

const TodoList = props => {
  const { todos, ...otherProps } = props;
  const elements = todos.map(item => <TodoListItem {...item} key={item.id} {...otherProps} />);

  return <ul className="todo_list">{elements} </ul>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onClickImportant: PropTypes.func,
  changeDone: PropTypes.func
};

export default TodoList;
