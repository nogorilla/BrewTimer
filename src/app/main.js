import MashTimer from './mash-timer';

window.onload = () => {
  let mashTimer = new MashTimer();
  document.getElementById('start').addEventListener('click', (e) => mashTimer.start(e));
  document.getElementById('reset').addEventListener('click', (e) => mashTimer.reset(e));
  document.getElementById('stop').addEventListener('click', (e) => mashTimer.stop(e));
};
