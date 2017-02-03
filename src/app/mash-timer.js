import Timer from './timer';

class MashTimer extends Timer {
  constructor() {
    let duration = 60;
    let display  = document.getElementById('time');
    super(duration, display);
  }
  start(e) {
    if (typeof e !== 'undefined') {
      const pauseTxt = '<i class="material-icons left">pause_circle_filled</i>pause';
      const startTxt = '<i class="material-icons left">play_circle_filled</i>start';
      let el = e.target;

      if (typeof this.runningId === 'undefined') {
        el.innerHTML = pauseTxt;
        this.runningId = super.start();
      } else {
        el.innerHTML = startTxt;
        this.runningId = super.pause();
      }
    }
  }
}

export default MashTimer;
