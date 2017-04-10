let TimeFormat = function(totalSeconds) {
  let minutes = parseInt(totalSeconds / 60, 10);
  let seconds = parseInt(totalSeconds % 60, 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

module.exports = TimeFormat;