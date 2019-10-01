import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.button`
  font-size: 1rem;
  text-align: center; 
`;

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '' 
    }
  }

  // handleInputChange, handleSubmit & handleClick are all properties of TodoForm class. Hence we are not declaring them with a const.
  // Also we do not need a explicit bind in these functions because we are using es6. If we used es5 like handleInputChange(event) {} we would have to bind it explicitly like this.handleInputChange = this.handleInputChange.bind(this) inside the constructor function.
  
  handleInputChange = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.task);
    this.props.addTodo(this.state.task);
    this.setState({
      task: ''
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.removeCompletedTasks();
  }

  render() {
    return (
      // <form onSubmit={() => this.props.addTodo(this.state.task)}>
      // We cannnot call addTodo directly because we have to prevent default onSubmit. Hence we declared a new function handleSubmit.
      <>
        <Form onSubmit={this.handleSubmit}>
          <input 
            type='task' 
            name='task' 
            placeholder='Task' 
            value={this.state.task}
            onChange={this.handleInputChange}
          />
          <Button>Add Todo</Button>
        </Form>
        <Button onClick={this.handleClick}>Clear Completed</Button>
      </>
    )
  }
  
}

export default TodoForm;