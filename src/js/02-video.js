import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  const roundetTime = Math.round(data.seconds);
  localStorage.setItem(LOCAL_STORAGE_KEY, roundetTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
player.setCurrentTime(currentTime);
