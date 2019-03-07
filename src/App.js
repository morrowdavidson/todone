import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import Nav from './Nav/Nav';

class App extends Component {
  state = {
    displays: [
      { label: 'Today', id: "today", active: true },
      { label: 'This Week', id: "week", active: false },
      { label: 'All Tasks', id: "all", active: false }
    ]
  }

  switchDisplayHandler = (displayId) => {
    if (displayId === "today"){
      this.setState({
        displays: [
          { label: 'Today', id: "today", active: true },
          { label: 'This Week', id: "week", active: false },
          { label: 'All Tasks', id: "all", active: false }
        ]
      })
    } else if (displayId === "week"){
      this.setState({
        displays: [
          { label: 'Today', id: "today", active: false },
          { label: 'This Week', id: "week", active: true },
          { label: 'All Tasks', id: "all", active: false }
        ]
      })
    } else {   
      this.setState({
      displays: [
        { label: 'Today', id: "today", active: false },
        { label: 'This Week', id: "week", active: false },
        { label: 'All Tasks', id: "all", active: true }
      ]
    })

    }
  }

  render() {
    return (
      <div id="page">
        <div id="app-container">
          <Header />
          <Nav 
          displays = {this.state.displays}
          switchDisplayHandler = {this.switchDisplayHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
