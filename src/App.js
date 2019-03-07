import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';

class App extends Component {
  state = {
    displays: [
      { label: 'Today', id: "today" },
      { label: 'This Week', id: "week" },
      { label: 'All Tasks', id: "all"}
    ]
  }

  render() {
    return (
      <div id="page">
        <div id="app-container">
          <Header />
          <Nav 
          displays = {this.state.displays}
          />
        </div>
      </div>
    );
  }
}

export default App;
