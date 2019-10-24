
/**
 * Creates the canvas, sets arttributes
 */
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.setAttribute('id', 'canvas');
canvas.setAttribute('class', 'canvasBG');

canvas.height = "800";
canvas.width = "800";

var playerHP = 5;

var waveNumer = 1;

/**
 * File: drawMap.js
 */
drawMap(this.ctx);

var allEnemies = [];

var allTowers = [];

var allProjectiles = [];

document.addEventListener('keypress', checkkey);

function checkkey(e) {
    if(e.code == "Space" && allEnemies.length == 0) {
        newWave(waveNumer);
        waveNumer++;
    } else if (e.code == "KeyX") {
      document.body.style.cursor = "url(img/placeCursor.png), pointer";
    } else if (e.code == "KeyC") {
      document.body.style.cursor = "url(img/placeCursor2.png), pointer";
    } else if (e.code == "KeyK") {
      document.body.style.cursor = "default";
    }
}

canvas.addEventListener("click", function (evt) {
  var mousePos = getMousePos(canvas, evt);
  if (document.body.style.cursor == "url(\"img/placeCursor.png\"), pointer") {
    newTower([mousePos.x-12.5,mousePos.y-12.5], towerType.SMALL);
  } else if (document.body.style.cursor == "url(\"img/placeCursor2.png\"), pointer") {
    newTower([mousePos.x-12.5,mousePos.y-12.5], towerType.MEDIUM);
  }
}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
  };
}


function updateScreen() {
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  drawMap();
  drawTowers();
  drawWave(waveNumer);
  if (playerHP <= 0) {
    drawGameover();
    return;
  }
  drawHP(playerHP);
  moveEnemies();
}
/**
 * Draw canvas on screen
 */
var body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);

var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');
var last = null;
var shootTimer = null;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
    if (!last || timestamp - last >= 100) { // Runs every second
        last = timestamp;
        updateScreen();
        uppdateProjectiles();

    } 
    if (!shootTimer || timestamp - shootTimer >= 500) {
      shootTimer = timestamp;
      shoot();
      
      
    }
  gameRun = window.requestAnimationFrame(step);

}

let gameRun = window.requestAnimationFrame(step);