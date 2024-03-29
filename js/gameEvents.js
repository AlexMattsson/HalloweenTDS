
async function newWave(waveNumber) {
    for (var i=0; i < waveNumber*3; i++) {
        var enemy = new Enemy(getStart(), enemyType.SMALL);
        allEnemies.push(enemy);
        await delay(100);
    }
}


function moveEnemies() {
    allEnemies.forEach(function(enemy, index) {
        var next = getNextPath(enemy.position, enemy.lastPosition);
        if (enemy.hp <= 0) {
            allEnemies.splice(index, 1);
        }
        try {
        if (isNextEnd(enemy.position)) {
            playerHP--;
            allEnemies.splice(index, 1);
            return;
        }
            
        } catch (error) {
            
        }
        drawImage(enemy.img, next);
        enemy.lastPosition = enemy.position;
        enemy.position = next;
    })
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function newTower(position, type) {
    if (isAllowedTurret(position)) {
        var tower = new Tower(position, type);
        if(money >= tower.cost) {
            var x = Math.round(position[0]/25);
            var y = Math.round(position[1]/25);
            map[y] = replaceAt(map[y], x*2, "@");
            allTowers.push(tower);
        } else {

        }
    } else {
        displayText("Not allowed to place turret there!");
    }
}

var BreakException = {};

function shootTower(tower) {
    try {
        allEnemies.forEach(function(enemy, index) {
            if(rangeBetween(tower.position, enemy.position) < tower.range) {
                var projectile = new Projectile([tower.position[0], tower.position[1]], enemy, tower);
                allProjectiles.push(projectile);
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }   
}

function rangeBetween(tower, enemy) {
    var dx = enemy[0]*25 - tower[0];
    var dy = enemy[1]*25 - tower[1];
    
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function displayText(text) {
    displayTimer = 0;
    currentText = text;
    display = true;
}