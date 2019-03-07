import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';
import TodoList from './TodoList/TodoList';
 
let loadDisplay = 'Today';

(() => {
  if (window.location.hash) {
    let displayHash = window.location.hash;
    loadDisplay = displayHash.replace('#','');
}}
)();

class App extends Component {
  currentDisplay = 'Today'
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
    
    return ( 

      <div id="page">
        <div id="app-container">
          <Header />
          <Nav 
            displays = {this.state.displays}
            switchDisplayHandler = {this.switchDisplayHandler}
            activeDisplay = {this.state.activeDisplay}
          />
          <TodoList />
        </div>
      </div>
    );
    
  }
}


export default App;
