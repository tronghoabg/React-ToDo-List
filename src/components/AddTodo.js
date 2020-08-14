import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: ""
    }
    onInputChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        });
    }
    render() {
        return (
          <form className="from-container"
                onSubmit={this.addTodo}>
            <input
              className="input-text"
              type="text"
              placeholder="Add Todo..."
              value={this.state.title}
              onChange={this.onInputChange}
            />
            <button className="input-submit" value="Submit" type="submit">
              Thêm
            </button>
          </form>
        );
    }
};
export default AddTodo;