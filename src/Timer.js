import React, { Component, PropTypes } from 'react'
import TimeFormat from './TimeFormat'

import './buttons.css';

let offset = null

/**
 * Timer module
 * A simple timer component.
**/
export default class Timer extends Component {

  constructor(props) {
    super(props)
    this.interval = null;
    this.state = { 
      time: props.options.time, 
      initialTime: props.options.secondsRemaining,
      runningText: 'start' 
    }
  }

  componentWillUnmount() {
    this.reset();
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      delete this.interval;
      this.setState({runningText: 'start'})
    }
  }

  pause() {
    this.stop();
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(this.update.bind(this), 1000)
      this.setState({runningText: 'pause'});
    } else {
      this.pause();
      
    }
  }

  reset() {
    this.stop();
    this.setState({time: this.state.initial })
  }

  update() {
    this.setState({time: this.state.time - 1});
    if (this.state.time <= 0) {
      clearInterval(this.interval);
    }
  }

  calculateOffset() {
    let now = Date.now()
    let newOffset = now - offset
    offset = now
    return newOffset
  }

  render() {

    return (
      <div className="mash-timer">
        <h3 className="seconds"> { TimeFormat(this.state.time) }</h3>
        <br />
        <button onClick={this.start.bind(this)} className="btn">{this.state.runningText}</button>
        <button onClick={this.stop.bind(this)} className="btn">stop</button>
        <button onClick={this.reset.bind(this)} className="btn">reset</button>
      </div>
    )
  }
}

Timer.propTypes = {
  options: PropTypes.object
}