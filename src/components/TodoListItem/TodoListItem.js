import React from "react";
import "./TodoListItem.css";
import ImportantIcon from "./warning-sign.inline.svg";
import DeleteIcon from "./delete.inline.svg";
import PropTypes from "prop-types";

const TodoListItem = props => {
  let classNameLabel = "todo_list_item-label";
  if (props.important) classNameLabel += " todo_list_item-label--important";
  return (
    <li className="todo_list_item">
      <span className={classNameLabel}>{props.label}</span>
      <button className="todo_list_item-button">
        <ImportantIcon className="todo_list_item-icon" width={20} height={20} />
      </button>
      <button className="todo_list_item-button">
        <DeleteIcon className="todo_list_item-icon" width={20} height={20} />
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool
};

export default TodoListItem;
