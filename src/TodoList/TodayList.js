import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';


class TodayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteringInput: false,
      id: 'todayList',
      buttonLabel: 'Add task for today',
      listItems : [
        {content: 'this is a test'}
      ]
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
      buttonOrInput = <li id={this.state.id + "Input"} className="list-group-item add-task-input"><button onClick={this.inputToggleHandler} className="fas fa-plus"></button><input autoFocus onBlur={this.inputToggleHandler} id={this.state.id + "InputField"} type="text" /></li>
    } else {
      buttonOrInput = <li onClick={this.inputToggleHandler} id={this.state.id + "Button"} className="list-group-item add-task-button"><button className="fas fa-plus"></button>{this.state.buttonLabel}</li>
   }

    return (
      <ul className="list-group" id={this.state.id}>
        <TodoItem />
        {buttonOrInput}
      </ul>
    )
  }
};

export default TodayList;