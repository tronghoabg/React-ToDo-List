import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return(
            <div>
                <li className="todo-item">{this.props.todo.title}</li>
            </div>
        )
    }
}
export default TodoItem;