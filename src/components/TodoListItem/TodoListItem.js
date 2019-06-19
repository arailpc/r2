import React from "react";
import "./TodoListItem.css";
import ImportantIcon from "./warning-sign.inline.svg";
import DeleteIcon from "./delete.inline.svg";
import PropTypes from "prop-types";

const TodoListItem = props => {
  let classNameLabel = "todo_list_item-label";
  if (props.important) classNameLabel += " todo_list_item-label--important";
  if (props.done) classNameLabel += " todo_list_item-label--done";
  return (
    <li className="todo_list_item">
      <span className={classNameLabel} onClick={() => props.changeDone(props.id)}>
        {props.label}
      </span>
      <button className="todo_list_item-button" onClick={() => props.onClickImportant(props.id)}>
        <ImportantIcon className="todo_list_item-icon" width={15} height={15} />
      </button>
      <button className="todo_list_item-button" onClick={() => props.onClickDelete(props.id)}>
        <DeleteIcon className="todo_list_item-icon" width={15} height={15} />
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string,
  important: PropTypes.bool,
  onClickImportant: PropTypes.func,
  id: PropTypes.number,
  done: PropTypes.bool,
  changeDone: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default TodoListItem;
