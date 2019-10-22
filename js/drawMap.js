var start; //['x value', 'y value']
var end;
var map = hMap;

function drawMap(ctx) {

    map.forEach(function(row, index) {
        for (var k=0; k<row.length; k++) {

            switch (row[k]) {
                case "#": //Enemy Path
                    this.ctx.fillStyle = '#78B5F9';
                    break;
                case "%": //Start 
                    start = [k/2, index];
                    this.ctx.fillStyle = '#20E808';
                    break;
                case "&": //End
                    end = [k/2, index]
                    console.log("test " + start);
                    this.ctx.fillStyle = '#C71315';
                    break;
                case ".": //BG
                    this.ctx.fillStyle = '#6F8717';
                    break;
            }
            this.ctx.fillRect(k/2*25, index*25, 25, 25);
        }
    });
}

function getNextPath(position, lastPosition) {
    var x = position[0];
    var y = position[1];
    var lastX = lastPosition[0];
    var lastY = lastPosition[1];
    var nextPath = [lastX, lastY];
    console.log("BIG TEST " + (y-1) + " " + lastY);
        
    if (map[y-1][x*2] == "#" && !arraysEqual([x, y-1], lastPosition)) { // Check above
        nextPath = [x, y-1];
    } else if (map[y][(x+1)*2] == "#" && !arraysEqual([x+1, y], lastPosition)) { // Check right
        nextPath = [x+1, y];
    } else if(map[y+1][x*2] == "#" && !arraysEqual([x, y+1], lastPosition)) { // Check under
        nextPath = [x, y+1];
    } else if (map[y][(x-1)*2] == "#" && !arraysEqual([x-1, y], lastPosition)) { //Check left
        nextPath = [x-1, y];
    }
    return nextPath;
}

function getStart() {
    return this.start;
}

function getEnd() {
    return this.end;
}

function draw(color, position) {
    ctx.fillStyle = color;
    ctx.fillRect(position[0]*25, position[1]*25, 25, 25);
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }