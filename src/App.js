import React, { Component } from 'react'
import './App.css';
import Timer from './Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>BrewTimer</h2>
        </div>
        <Timer options={{ time: 3600 }} />
      </div>
    );
  }
}

export default App;
