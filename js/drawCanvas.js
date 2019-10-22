
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
var foo = new Enemy(getStart(), enemyType.SMALL);
var bar = new Enemy(getStart(), enemyType.MEDIUM);
//allEnemies.push(foo);
//allEnemies.push(bar);

document.addEventListener('keypress', checkkey);

function checkkey(e) {
    if(e.code == "Space") {
        newWave(waveNumer);
    }
}


function updateScreen() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    drawMap();
    drawCounter(ctx, playerHP);
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

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
    if (!last || timestamp - last >= 200) { // Runs every second
        last = timestamp;
        updateScreen();
    }


  gameRun = window.requestAnimationFrame(step);
}

let gameRun = window.requestAnimationFrame(step);