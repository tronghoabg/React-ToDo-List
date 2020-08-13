import React, {Component} from 'react';
import Header from './layout/Header';

class TodoApp extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
};
export default TodoApp;