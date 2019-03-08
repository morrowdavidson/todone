import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteringInput: false
    };
  }

  inputToggleHandler = () => {
    if (!this.state.enteringInput) {
        this.setState({
            enteringInput : true
        })
    } else {this.setState({
        enteringInput : false
    })
    }
  }

  render(){
    let buttonOrInput = null;

    if (this.state.enteringInput) {
        buttonOrInput = <li id={this.props.id + "ListInput"} className="list-group-item add-task-input"><button onClick={this.inputToggleHandler} className="fas fa-plus"></button><input onBlur={this.inputToggleHandler} id={this.props.id + "ListInputField"} type="text" /></li>
    } else {
        buttonOrInput = <li onClick={this.inputToggleHandler} id={this.props.id + "ListButton"} className="list-group-item add-task-button"><button className="fas fa-plus"></button>{this.props.buttonLabel}</li>
    }

    return (
      <ul className="list-group" id={this.props.id}>
        <TodoItem />
        {buttonOrInput}
      </ul>
    )
  }
};

export default TodoList;