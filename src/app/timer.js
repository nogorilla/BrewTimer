class Timer {

  constructor(duration, displayEl) {
    this.time = this.duration = 60 * duration || 3600;
    this.displayEl = displayEl;
    this._display(this.duration);
  }

  _display(timer) {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    this.displayEl.textContent = `${minutes}:${seconds}`;
  }

  start() {
    if (typeof this.countdownId !== 'undefined') {
      return false;
    }
    this._countdown();
    this.countdownId = setInterval(() => this._countdown(), 1000);
    return this.countdownId;
  }

  _countdown() {
    this._display(this.time);

    if (--this.time < 0) {
      this.end();
    }
  }

  stop() {
    if (typeof this.countdownId !== 'undefined') {
      clearInterval(this.countdownId);
      delete this.countdownId;
    }
    if (typeof this.alertId !== 'undefined') {
      clearInterval(this.alertId);
      delete this.alertId;
    }
  }

  reset() {
    this.stop();
    this._display(this.duration);
  }

  pause() {
    this.stop();
    return this.start();
  }

  end() {
    // #todo what happens when the timer ends?
    this.stop();
    this._alert();
    this.alertId = setInterval(this._alert, 100);
  }

  _alert() {
    let el = document.body;
    if (el.classList.contains('red') || el.classList.contains('accent-4')) {
      el.classList.remove('red');
      el.classList.remove('accent-4')
    } else {
      el.classList.add('red');
      el.classList.add('accent-4');
    }
  }
}

export default Timer;
