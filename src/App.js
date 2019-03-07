import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';
import TodoList from './TodoList/TodoList';
 

let currentDisplay = 'Today';

(() => {
  if (window.location.hash) {
    let displayHash = window.location.hash;
    currentDisplay = displayHash.replace('#','');
}}
)();

class App extends Component {
  state = {
    displays: [
      { label: 'Today', id: 'today' },
      { label: 'This Week', id: 'week' },
      { label: 'All Tasks', id: 'all' }
    ],
    activeDisplay: currentDisplay,
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
