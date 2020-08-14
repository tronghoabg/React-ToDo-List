import React, {Component} from 'react';
import axios from 'axios';
import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoApp extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    const config = {
      params: {
        _limit: 10,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then(response => {
        this.setState({
          todos: response.data
        })
      });
  }
  handleCheckboxChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
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