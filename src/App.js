import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';

class App extends Component {
  state = {
    display: [
      'today',
      'thisWeek',
      'allTasks'
    ]
  }

  render() {
    return (
      <div id="page">
        <div id="app-container">
          <Header />
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
