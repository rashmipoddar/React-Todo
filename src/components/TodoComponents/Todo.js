import React from 'react';
import styled from 'styled-components';

const StyledPara = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  padding: 3px;
  font-family: 'Ubuntu', sans-serif;
`;

const Todo = props => {
  return (
    <StyledPara 
      className={props.todo.completed ? 'completed': ''}
      onClick={() => props.modifyTaskStatus(props.todo.id)}
    >
      {props.todo.task}
    </StyledPara>
    
  )
}

export default Todo;