import MashTimer from './mash-timer';

window.onload = () => {
  let mashTimer = new MashTimer();
  document.getElementById('start').addEventListener('click', () => mashTimer.start());
  document.getElementById('reset').addEventListener('click', () => mashTimer.reset());
  document.getElementById('stop').addEventListener('click', () => mashTimer.stop());
};
