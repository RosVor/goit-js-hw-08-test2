import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const currentTimeKey = 'videoplayer-current-time';
player.on('timeupdate', _.throttle(function (event) {
  const currentTime = event.seconds;
  localStorage.setItem(currentTimeKey, currentTime);
}, 1000));
document.addEventListener('DOMContentLoaded', function () {
  const savedTime = localStorage.getItem(currentTimeKey);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});