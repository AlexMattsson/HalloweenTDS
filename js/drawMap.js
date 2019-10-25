var startValue = []; //['x value', 'y value']
var endValue = [];
var map = hMap;

function drawMap(ctx) {
    const bg = document.getElementById('bg');
    map.forEach(function(row, index) {
        for (var k=0; k<row.length; k++) {

            switch (row[k]) {
                case "#": //Enemy Path
                    this.ctx.fillStyle = '#78B5F9';
                    this.ctx.fillRect(k/2*25, index*25, 25, 25);
                    break;
                case "%": //Start 
                    startValue = [k/2, index];
                    this.ctx.fillStyle = '#20E808';
                    this.ctx.fillRect(k/2*25, index*25, 25, 25);
                    break;
                case "&": //End
                    endValue = [k/2, index]
                    this.ctx.fillStyle = '#C71315';
                    this.ctx.fillRect(k/2*25, index*25, 25, 25);
                    break;
                case ".": //BG
                    this.ctx.drawImage(bg, k/2*25, index*25, 25, 25);
                    break;
                case "@":
                    this.ctx.drawImage(bg, k/2*25, index*25, 25, 25);
                    break;
            }
        }
    });
}

function getNextPath(position, lastPosition) {
    var x = position[0];
    var y = position[1];
    var lastX = lastPosition[0];
    var lastY = lastPosition[1];
    var nextPath = [lastX, lastY];
        
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

function isNextEnd(position) {
    var x = position[0];
    var y = position[1];
    if (map[y-1][x*2] == "&") { // Check above
        return true;
    } else if (map[y][(x+1)*2] == "&") { // Check right
        return true;
    } else if(map[y+1][x*2] == "&") { // Check under
        return true;
    } else if (map[y][(x-1)*2] == "&") { //Check left
        return true;
    } else {
        return false;
    }
}

function isAllowedTurret(position) {
    var botRightX = Math.round((position[0]+12.5)/25);//bottom right
    var botRightY = Math.round((position[1]+12.5)/25);//bottom right
    var botLeftX = Math.round((position[0]-12.5)/25);//bottom left
    var botLeftY = Math.round((position[1]+12.5)/25);//bottom left
    var topLeftX = Math.round((position[0]-12.5)/25);//top left
    var topLeftY = Math.round((position[1]-12.5)/25);//top left
    var topRightX = Math.round((position[0]+12.5)/25);//top right
    var topRightY = Math.round((position[1]-12.5)/25);//top right
    if (map[botRightY][botRightX*2] == "." && 
        map[botLeftY][botLeftX*2] == "." && 
        map[topLeftY][topLeftX*2] == "." && 
        map[topRightY][topRightX*2] == ".") {
            return true;
            /*allTowers.forEach(function (tower, index) {

               if (botRightX == (tower.position[0]+12.5)/25 && ) {

                    console.log("BIG TEST");
                    
                    return false;    
                    console.log("test");
                                                 
               }
            });*/
    } else {   
         
        return false;
    }
}

function getStart() {
    return startValue;
}

function getEnd() {
    return endValue;
}

function draw(color, position) {
    ctx.fillStyle = color;
    ctx.fillRect(position[0]*1, position[1]*1, 1, 1);
}

function drawImage(img, position) {
    ctx.drawImage(img, position[0]*25, position[1]*25, 25, 25); // dx, dy, dw, dh
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

const hpImage = document.getElementById('hpImage');
function drawHP(hp) {
    for (var i=1; i<=hp; i++) {
        ctx.drawImage(hpImage, 50*i, 50, 50, 37); // dx, dy, dw, dh
    }
}

function drawWave(wave) {
    ctx.font = "32px Verdana";
    ctx.fillStyle = "red";
    ctx.fillText("Wave " + (wave-1) ,600,50);
}

function drawGameover() {
    ctx.font = "130px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText("GAME OVER" ,0,450);
}

function drawTowers() {
    allTowers.forEach(function (tower, index) {
        ctx.drawImage(tower.img, tower.position[0], tower.position[1], 25, 25);
    });
}

function shoot() {
    allTowers.forEach(function (tower) {
        shootTower(tower);
    });
}

function getAngle(pos1, pos2) {
     return Math.atan2(pos2[1] - pos1[1], pos2[0] - pos1[0]);
}

function uppdateProjectiles() {
    allProjectiles.forEach(function(projectile, index) {
        if (arraysEqual([Math.round(projectile.position[0]/25), Math.round(projectile.position[1]/25)], projectile.target.position)) {
            projectile.target.hp -= projectile.sender.damage;
            allProjectiles.splice(index, 1);
        }
        var angle = getAngle(projectile.position, [projectile.target.position[0]*25, projectile.target.position[1]*25]);
        //console.log([projectile.target.position[0]*25, projectile.target.position[1]*25] +  " " + projectile.position[0] + " " + projectile.position[1] + " " + Math.sin(angle));
        
        ctx.drawImage(projectile.img, projectile.position[0], projectile.position[1], 25, 25);
        projectile.position[0] += 5 * Math.cos(angle);
        projectile.position[1] += 5 * Math.sin(angle);
        
    })
}
const scary = document.getElementById('scary');

function drawScary1() {
    ctx.drawImage(scary, 150 , 330, 600, 600);
}

function drawScary2() {
    ctx.drawImage(scary, 100, 250, 700, 700);
}

