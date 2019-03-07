import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="page">
        <div id="app-container">
          <div id="header">
            <div id="logo_tag">
              <h1>todone</h1>
              <p>A simple todo app.</p>
            </div>
            <i className="gear-icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
