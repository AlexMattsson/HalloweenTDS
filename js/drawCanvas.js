var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');


canvas.setAttribute('id', 'canvas');
canvas.setAttribute('class', 'canvasBG');

canvas.height = "800";
canvas.width = "800";

drawMap(this.ctx);

var body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);

