class Timer {

  constructor(options) {
    let defaults = {duration: 60};
    Object.assign(defaults, options)
    this.time = this.duration = 60 * defaults.duration || 3600;
    this.displayEl = defaults.displayEl;
    this.alert = defaults.alert;
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
    this._alertClear();
    this._soundReset();
  }

  reset() {
    this.stop();
    this.alert.pause();
    this.alert.currentTime = 0;
    this._display(this.duration);
    this._soundReset();
  }

  pause() {
    this.stop();
    return this.start();
  }

  end() {
    this.stop();
    this._alert();
    this.alertId = setInterval(() => this._alert(), 100);
    this.alert.play();
  }

  _alert() {
    let el = document.body;
    if (el.classList.contains('red') || el.classList.contains('accent-4')) {
      this._alertClear();
    } else {
      el.classList.add('red');
      el.classList.add('accent-4');
    }
  }

  _soundReset() {
    this.alert.pause();
    this.alert.currentTime = 0;
  }

  _alertClear() {
    document.body.classList.remove('red');
    document.body.classList.remove('accent-4');
  }
}

export default Timer;
