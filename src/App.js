import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';
import TodoList from './TodoList/TodoList';
 
let loadDisplay = 'today';

(() => {
  if (window.location.hash) {
    let displayHash = window.location.hash;
    loadDisplay = displayHash.replace('#','');
}}
)();

class App extends Component {
  state = {
    displays: [
      { label: 'Today', id: 'today' },
      { label: 'This Week', id: 'week' },
      { label: 'All Tasks', id: 'all' }
    ],
    activeDisplay: loadDisplay,
  }
  
  switchDisplayHandler = (displayId) => {  
    this.setState({
      activeDisplay : displayId
    })
  }
  render() {
    
    let lists = null;
    let todayList = <TodoList id='todayList' buttonLabel='Add task for today'/>;
    let weekList = <TodoList id='weekList' buttonLabel='Add task for this week'/>;
    let allList = <TodoList id='allList' buttonLabel='Add task'/>


    if (this.state.activeDisplay === "today") {
      lists = (
        <div>
          {todayList}
        </div>

      )
    } else if (this.state.activeDisplay === "week"){
      lists = (
        <div>
          {weekList}
          {todayList}
        </div>
      )
    } else {
      lists = (
        <div>
          {allList}
          {weekList}
          {todayList}
        </div>
      )
    }
    
    return ( 

      <div id="page">
        <div id="app-container">
          <Header />
          <Nav 
            displays = {this.state.displays}
            switchDisplayHandler = {this.switchDisplayHandler}
            activeDisplay = {this.state.activeDisplay}
          />
          {lists}
        </div>
      </div>
    );
    
  }
}


export default App;
