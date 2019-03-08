import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';
import TodayList from './TodoList/TodayList';
import WeekList from './TodoList/WeekList';
import AllList from './TodoList/AllList';

 
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

    if (this.state.activeDisplay === "today") {
      lists = (
        <div>
          <TodayList />
        </div>
      )
    } else if (this.state.activeDisplay === "week"){
      lists = (
        <div>
          <WeekList />
          <TodayList />
        </div>
      )
    } else {
      lists = (
        <div>
          <AllList />
          <WeekList />
          <TodayList />
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
          <AllList 
            activeDisplay = {this.state.activeDisplay}
          />
        </div>
      </div>
    );
    
  }
}


export default App;
