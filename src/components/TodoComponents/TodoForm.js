import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }

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

  render() {
    return (
      // <form onSubmit={() => this.props.addTodo(this.state.task)}>
      // We cannnot call addTodo directly because we have to prevent default onSubmit. Hence we declared a new function handleSubmit.
      <>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='task' 
            name='task' 
            placeholder='Task' 
            value={this.state.task}
            onChange={this.handleInputChange}
          />
          <button>Add Todo</button>
        </form>
        <button>Clear Completed</button>
      </>
    )
  }
  
}

export default TodoForm;