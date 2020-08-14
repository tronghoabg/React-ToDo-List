import React, {Component} from 'react';
import axios from 'axios';
import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoApp extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Đi học",
        completed: true,
      },
      {
        id: 2,
        title: "Nấu cơm",
        completed: false,
      },
      {
        id: 3,
        title: "Đi ngủ",
        completed: false,
      },
    ],
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(res => console.log(res.data))
  }
  'hihi'
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
    })
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id
      })
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  render() {
    
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos 
          todos={this.state.todos} 
          handleChange={this.handleCheckboxChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
};
export default TodoApp;