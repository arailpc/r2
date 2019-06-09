import React from "react";
import DeleteIcon from "./delete.svg";

const TodoList = () => {
  return (
    <ul>
      <li>
        <span>Learn React</span>
        <DeleteIcon width={20} height={20} />
      </li>
    </ul>
  );
};

export default TodoList;
