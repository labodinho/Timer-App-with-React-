import React, { Component } from 'react';
import Timer from './TimerApp/Timer';
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <Timer start={Date.now()} />

      </div>
    )
  }
}

export default App