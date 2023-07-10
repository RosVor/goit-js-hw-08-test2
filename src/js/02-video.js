import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const currentTimeKey = 'videoplayer-current-time';
const updateCurrentTime = throttle(function (event) {
  const currentTime = event.seconds;
  localStorage.setItem(currentTimeKey, currentTime);
}, 1000);
player.on('timeupdate', updateCurrentTime);

document.addEventListener('DOMContentLoaded', function () {
  const savedTime = localStorage.getItem(currentTimeKey);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});