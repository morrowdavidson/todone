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
          key: 1,
          isChecked: false,
        }
      ],
      weekList: [
        {
          content: 'this is a test for this week',
          key: 2,
          isChecked: false,
        }
      ],
      allList: [
        {
          content: 'this is a test for all',
          key: 3,
          isChecked: false,
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
            key: this.state.keyCounter + [listId],
            isChecked: false,
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
  
  removeItem = (listId, key) => {
    let currentState = this.state[listId];
    let newState = currentState.filter((listState)=>{
      return listState.key !== key
    })

    this.setState({
      [listId] : newState
    })

  }

  editItem = (listId, key) => {
    console.log(listId);
    console.log(key);
  }

  checkedToggle = (event, key, listId) => {
    let currentState = this.state[listId];

    if(event.target.className === 'far fa-circle'){

    let newState = currentState.map(listItem => {
      if (listItem.key === key){
        listItem.isChecked = true; 
        return listItem;     
      }     
      return listItem;
    })   
    this.setState({
      [listId] : newState
    })
    
    } else {
      let newState = currentState.map(listItem => {
        if (listItem.key === key){
          listItem.isChecked = false; 
          return listItem;     
        }     
      return listItem;
      })    
      this.setState({
        [listId] : newState
      })
    }
  }

  moveItem = (key, listId, moveTo) => {
    let currentState = this.state[listId];
    let addedItem = currentState.filter((listState)=>{
      return listState.key === key
    })
    let newState = currentState.filter((listState)=>{
      return listState.key !== key
    })

    this.setState({
      [listId] : newState
    })
    if (moveTo==='todayList'){
      this.setState({
        todayList :[
          ...addedItem,
          ...this.state.todayList
        ]
      })
    }else if (moveTo==='weekList') {
      this.setState({
        weekList :[
          ...addedItem,
          ...this.state.weekList
        ]
      })
    }
    else {
      this.setState({
        allList :[
          ...addedItem,
          ...this.state.allList
        ]
      })
    }
  }

  render(){
    let allItems = this.state.allList.map((listItem) => {
      return <TodoItem 
              checkedToggle={(event) => {this.checkedToggle(event, listItem.key, "allList")}} 
              checkedClass={listItem.isChecked ? 'fa-check-circle' : 'fa-circle'} 
              id="allList" 
              key={listItem.key} 
              content={listItem.content} 
              removeItem={() => this.removeItem("allList", listItem.key)}
              quickLinks={<div className="quicklinks"><a onClick={() => {this.moveItem(listItem.key, "allList","weekList")}} id={listItem.key + 'MoveWeek'} href='#week'>Move to this week</a></div>}
              />
    }) 
    let weekItems = this.state.weekList.map((listItem) => {
      return <TodoItem 
              checkedToggle={(event) => {this.checkedToggle(event, listItem.key, "weekList")}} 
              checkedClass={listItem.isChecked ? 'fa-check-circle' : 'fa-circle'} 
              id="weekList" 
              key={listItem.key} 
              content={listItem.content} 
              removeItem={() => this.removeItem("weekList", listItem.key)}
              quickLinks={<div className="quicklinks"><a onClick={() => {this.moveItem(listItem.key, "weekList","todayList")}} id={listItem.key + 'MoveToday'} href='#today'>Move to today</a> | <a onClick={() => {this.moveItem(listItem.key, "weekList","allList")}} id={listItem.key + 'MoveAll'} href='#all'>Move to all tasks</a></div>}
              />
    }) 
    let todayItems = this.state.todayList.map((listItem) => {
      return <TodoItem 
              checkedToggle={(event) => {this.checkedToggle(event, listItem.key, "todayList")}} 
              checkedClass={listItem.isChecked ? 'fa-check-circle' : 'fa-circle'} 
              id="todayList" 
              key={listItem.key} 
              content={listItem.content} 
              removeItem={() => this.removeItem("todayList", listItem.key)}
              quickLinks={<div className="quicklinks"><a onClick={() => {this.moveItem(listItem.key, "todayList", "weekList")}} id={listItem.key + 'MoveWeek'} href='#week'>Move to this week</a></div>}

              />
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