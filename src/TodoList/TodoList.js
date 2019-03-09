import React, { Component } from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';
import AddItemButton from './AddItemButton';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteringInput: false,
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

  inputToggleHandler = (event) => {
    if (!this.state.enteringInput) {
      this.setState({
        enteringInput : true
      })
    } else if (event.target.value !== '') {
      let inputId = event.target.id;
      let listId = inputId.replace('InputField', '');
      this.setState({
        enteringInput : false,
        [listId] : [
          ...this.state[listId],
          {content: event.target.value}
        ]
      })
    } else {
    this.setState({
      enteringInput : false,
    })
    }
  }
  
  render(){
    let allItems = this.state.allList.map((listItem, i) => {
      return <TodoItem  key={i} content={listItem.content}/>
    }) 
    let weekItems = this.state.weekList.map((listItem, i) => {
      return <TodoItem key={i} content={listItem.content}/>
    }) 
    let todayItems = this.state.todayList.map((listItem, i) => {
      return <TodoItem key={i} content={listItem.content}/>
    }) 
    
    let allButton = 
      <AddItemButton 
      id = 'allList' 
      inputToggleHandler = {this.inputToggleHandler} 
      enteringInput = {this.state.enteringInput}
      buttonLabel = 'Add a task'/>
      
    let weekButton = 
      <AddItemButton 
      id = 'weekList' 
      inputToggleHandler = {this.inputToggleHandler} 
      enteringInput = {this.state.enteringInput}
      buttonLabel = 'Add a task for this week'/>

    let todayButton = 
      <AddItemButton 
      id = 'todayList' 
      inputToggleHandler = {this.inputToggleHandler} 
      enteringInput = {this.state.enteringInput}
      buttonLabel = 'Add a task for today'/>

    let allList =  
      <div>
        <ul className="list-group" id='allList'>
          {allItems}
          {allButton}
        </ul>
        <ul className="list-group" id='weekList'>
          {weekItems}
        </ul>
        <ul className="list-group" id='todayList'>
          {todayItems}
        </ul>
      </div>

    let weekList =
      <div>
        <ul className="list-group" id='weekList'>
          {weekItems}
          {weekButton}
        </ul>
        <ul className="list-group" id='todayList'>
          {todayItems}
        </ul>
      </div>
      
    let todayList =
      <div>
        <ul className="list-group" id='todayList'>
          {todayItems}
          {todayButton}
        </ul>
      </div>

    let currentLists = allList;


    if (this.props.activeDisplay === 'today'){
      currentLists = todayList;
    } else if (this.props.activeDisplay === 'week'){
      currentLists = weekList;
    } else {
      currentLists = allList;
    }


    return (
      currentLists
    )
  }
};

export default TodoList;