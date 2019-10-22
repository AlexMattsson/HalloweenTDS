
/**
 * Creates the canvas, sets arttributes
 */
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.setAttribute('id', 'canvas');
canvas.setAttribute('class', 'canvasBG');

canvas.height = "800";
canvas.width = "800";

/**
 * File: drawMap.js
 */
drawMap(this.ctx);


var allEnemies = [];
var foo = new Enemy(getStart(), enemyType.SMALL);
allEnemies.push(foo);

/**
 * Move all enemeies another step
 */
function moveEnemies() {
    allEnemies.forEach(function(enemy) {
        var next = getNextPath(enemy.position, enemy.lastPosition);
        draw(enemy.img, next);
        if (!(enemy.position == getStart())) {
            draw("#78B5F9", enemy.position); 
        }
        enemy.lastPosition = enemy.position;
        enemy.position = next;
    })
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
    if (!last || timestamp - last >= 250) { // Runs every second
        last = timestamp;
        moveEnemies();
    }


  gameRun = window.requestAnimationFrame(step);
}

let gameRun = window.requestAnimationFrame(step);