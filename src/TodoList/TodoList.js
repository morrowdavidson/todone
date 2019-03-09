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
      keyCounter: 4,
      todayList: [
        {
          content: 'this is a test for today',
          key: 1
        }
      ],
      weekList: [
        {
          content: 'this is a test for this week',
          key: 2
        }
      ],
      allList: [
        {
          content: 'this is a test for all',
          key: 3
        }
      ],
    };
  }

  inputToggleHandler = (event, replay) => {
    if (!this.state.enteringInput) {
      this.setState({
        enteringInput : true
      })
    } else if (event.target.value !== '') {
      let inputId = event.target.id;
      let listId = inputId.replace('InputField', '');
      let currentKeyCount = this.state.keyCounter;
      let currentState = this.state[listId];

      this.setState({
        keyCounter : ++currentKeyCount,
        enteringInput : false,
        [listId] : [
          ...currentState,
          {
            content: event.target.value,
            key: this.state.keyCounter
          }
        ]
      })
      if (replay){
        this.setState({
          enteringInput : true,
        })
      }
    } else {
    this.setState({
      enteringInput : false,
    })
    }
  }
  
  removeItem = (event) => {
    let listId = event.target.title;
    let key = parseInt(event.target.id);
    let currentState = this.state[listId];
    let newState = currentState.filter((listState)=>{
      return listState.key !== key
    })

    this.setState({
      [listId] : newState
    })

  }

  render(){
    let allItems = this.state.allList.map((listItem) => {
      return <TodoItem id="allList" key={listItem.key} keyValue={listItem.key} content={listItem.content} removeItem={this.removeItem}/>
    }) 
    let weekItems = this.state.weekList.map((listItem) => {
      return <TodoItem id="weekList" key={listItem.key} keyValue={listItem.key} content={listItem.content} removeItem={this.removeItem}/>
    }) 
    let todayItems = this.state.todayList.map((listItem) => {
      return <TodoItem id="todayList" key={listItem.key} keyValue={listItem.key} content={listItem.content} removeItem={this.removeItem}/>
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