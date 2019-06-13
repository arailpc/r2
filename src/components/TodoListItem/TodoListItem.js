import React from "react";
import "./TodoListItem.css";
// import DeleteIcon from "./delete.svg";
import ImportantIcon from "./warning-sign.inline.svg";
import deleteIcon from "./delete.svg";

const TodoListItem = () => {
  return (
    <li className="todo_list_item">
      <span className="todo_list_item-label">Learn React</span>
      <img src={deleteIcon} className="todo_list_item-delete_icon" width={20} height={20} />
      <ImportantIcon className="todo_list_item-important_icon" width={20} height={20} />
    </li>
  );
};

export default TodoListItem;
