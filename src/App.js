import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // App is the Parent class hence its constructor function does not take any props. In React we will always extend a class to React.Component 
  //  We will never do something like class TodoForm extends App. 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [{
        id: Date.now(),
        task: 'Complete Sprint',
        completed: false
      }]
      // todos: localStorage.getItem('list')
    }
  }

  // We are not redifining componentDidMount function given by React. React just looks for a function called componentDidMount
  // which we get define like we want to. It will just call this function after the component is mounted(rendered) initially. 
  // componentDidMount() {
  //   const todosList = localStorage.getItem('list');
  //   this.setState({
  //     todos: todosList
  //   });
  // }

  addTodo = newTask => {
    const newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false
    };
    
    const callback = () => {
      console.log(this.state.todos);
      localStorage.setItem('list', JSON.stringify(this.state.todos));
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    }, callback)


    // console.log(this.state.todos);
    
  }

  modifyTaskStatus = (taskId) => {
    console.log('Clicked');
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === taskId) {
          return {
            id: taskId,
            task: todo.task,
            completed: !todo.completed
          } 
        } else {
          return todo;
        }
      })
    })
  }

  removeCompletedTasks = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  // render is provided by React so it has access to this keyword although we are not using ES6. We can do render = () => {} instead of render()
  // render is a function provided by React. We are not redefining the render function here. React looks for a render function and calls it when it sees it
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} modifyTaskStatus={this.modifyTaskStatus} />
        <TodoForm
          addTodo={this.addTodo}
          removeCompletedTasks={this.removeCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
