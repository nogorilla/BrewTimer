class Timer {
  constructor(duration) {
    this.duration = 60 * duration || 3600;
    this.display = document.getElementById('time');
  }

  _display(timer) {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    this.display.textContent = `${minutes}:${seconds}`;
  }

  start() {
    if (typeof this.runningId !== 'undefined') {
      return false;
    }
    let timer = this.duration;
    this.runningId = setInterval(() => {
        this._display(timer);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    return this.runningId;
  }

  stop() {
    if (typeof this.runningId !== 'undefined') {
      clearInterval(this.runningId);
      delete this.runningId;
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
}

export default Timer;
