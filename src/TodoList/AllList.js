import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';


class AllList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteringInput: false,
      id: 'allList',
      buttonLabel: 'Add task',
      todayList: [
        {content: 'this is a test for today'}
      ],
      thisWeekList: [
        {content: 'this is a test for this week'}
      ],
      allList: [
        {content: 'this is a test for all'}
      ]     
    };
  }

  inputToggleHandler = (evt) => {
    if (!this.state.enteringInput) {
        this.setState({
          enteringInput : true
        })
    } else {
      if (evt.target.value !== ''){
        this.setState({
          enteringInput : false,
          allList : [
            ...this.state.allList,
            {content: evt.target.value}
          ]
        })
      } else {
      this.setState({
        enteringInput : false,
      })
    }
    }
  }

  render(){
    let buttonOrInput = null;

    if (this.state.enteringInput) {
        buttonOrInput = <li id={this.state.id + "Input"} className="list-group-item add-task-input"><button onClick={evt => this.inputToggleHandler(evt)} className="fas fa-plus"></button><input autoFocus onBlur={evt => this.inputToggleHandler(evt)} id={this.state.id + "InputField"} type="text" /></li>
    } else {
        buttonOrInput = <li onClick={this.inputToggleHandler} id={this.state.id + "Button"} className="list-group-item add-task-button"><button className="fas fa-plus"></button>{this.state.buttonLabel}</li>
    }

    let allItems = this.state.allList.map(listItem => {
      return <TodoItem content={listItem.content}/>
    }) 

    return (
      <ul className="list-group" id={this.state.id}>
        {allItems}
        {buttonOrInput}
      </ul>
    )
  }
};

export default AllList;