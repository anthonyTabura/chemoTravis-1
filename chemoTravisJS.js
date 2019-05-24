var mySound;

function preload() {
 soundFormats('mp3', 'ogg');
  mySound = loadSound('data/itslit.mp3');
}

function setup() {
    console.log("hello");
  mySound.setVolume(0.1);
  mySound.play();
}