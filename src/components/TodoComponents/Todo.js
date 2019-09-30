import React from 'react';

const Todo = props => {
  return (
    <p 
      className={props.todo.completed ? 'completed': ''}
      onClick={() => props.modifyTaskStatus(props.todo.id)}
    >
      {props.todo.task}
    </p>
    
  )
}

export default Todo;