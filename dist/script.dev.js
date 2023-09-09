"use strict";

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 600;
var CANVAS_HEIGHT = canvas.height = 600;
var playerImage = new Image();
playerImage.src = 'shadow_dog.png';
var spriteWidth = 575;
var spriteHeight = 523;
var frameX = 0;
var frameY = 0;
var gameFrame = 0;
var staggerFrames = 5;
var spriteAnimations = [];
var animationStates = [];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  var position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;
  ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  gameFrame++;
  requestAnimationFrame(animate);
}

;
animate();