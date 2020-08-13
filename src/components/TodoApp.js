import React, {Component} from 'react';
import Header from './layout/Header';
import Todos from './Todos';
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

  render() {
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
};
export default TodoApp;