import React from 'react';

const ToDoList = props => {
  return (
    <>
      <div className="todo-items">
        <i
          class="fas fa-times-circle"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoList;
