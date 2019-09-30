import React from 'react';

const Todo = props => {
  return (
    <li 
      className={props.todo.completed ? 'completed': ''}
      onClick={() => props.modifyTaskStatus(props.todo.id)}
    >
      {props.todo.task}
    </li>
    
  )
}

export default Todo;