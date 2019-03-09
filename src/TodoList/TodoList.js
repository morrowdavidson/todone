import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';
import AddItemButton from './AddItemButton';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteringInput: false,
      id: 'allList',
      buttonLabel: 'Add task',
      todayList: [
        {content: 'this is a test for today'}
      ],
      weekList: [
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
    let allItems = this.state.allList.map(listItem => {
      return <TodoItem content={listItem.content}/>
    }) 
    let weekItems = this.state.weekList.map(listItem => {
      return <TodoItem content={listItem.content}/>
    }) 
    let todayItems = this.state.todayList.map(listItem => {
      return <TodoItem content={listItem.content}/>
    }) 

    return (
      <ul className="list-group" id={this.state.id}>
        {allItems}
        <AddItemButton 
          id = 'allList' 
          inputToggleHandler = {this.inputToggleHandler} 
          enteringInput = {this.state.enteringInput}
          buttonLabel = 'Add a task'/>
        {weekItems}
        <AddItemButton 
          id = 'weekList' 
          inputToggleHandler = {this.inputToggleHandler} 
          enteringInput = {this.state.enteringInput}
          buttonLabel = 'Add a task for this week'/>
        {todayItems}
        <AddItemButton 
          id = 'todayList' 
          inputToggleHandler = {this.inputToggleHandler} 
          enteringInput = {this.state.enteringInput}
          buttonLabel = 'Add a task for today'/>
      </ul>
    )
  }
};

export default TodoList;