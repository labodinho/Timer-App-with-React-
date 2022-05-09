import React, { Component } from 'react';
import './App.css'

class Timer extends Component {

  componentDidMount() {
    //It is used to keep the time ticking instead of using a BUTTON...component already mounted
    this.timer = setInterval(this.ticker, 1000)
  }

  ticker() {
    //this is to change the initial state of the clock
    this.setState({ clock: new Date() - this.props.start });

  }

  constructor(props) {
    super(props)

    this.state = {
      clock: 0
    };
    //this is to make the change of STATE possible hence, it need be binded 
    this.ticker = this.ticker.bind(this)
  };
  render() {
    //this is to round down the value of time to the minimum tenth
    var clock = Math.round(this.state.clock / 10000);
    return (
      <div>
        <p>Time spent on the App</p>
        <span>{clock}</span>
        <p>Seconds</p>
      </div>
    )
  }
}

export default Timer