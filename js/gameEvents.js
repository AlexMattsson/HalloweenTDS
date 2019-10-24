
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
        var x = Math.round(position[0]/25);
        var y = Math.round(position[1]/25);
        map[y] = replaceAt(map[y], x*2, "@");
        allTowers.push(tower);
    } else {
        console.log("not allow to place a turret there!");
    }
}

function shootTower(tower) {
    var range = tower.range; 
    var position = tower.position;
    
    allEnemies.forEach(function(enemy, index) {
        var projectile = new Projectile(position, enemy);
        allProjectiles.push(projectile);
        if(rangeBetween(tower.position, enemy.position) < tower.range) {
            enemy.hp -= tower.damage;
            if (enemy.hp <= 0) {
                allEnemies.splice(index, 1);
            }
        }
    });
}

function rangeBetween(tower, enemy) {
    var dx = enemy[0]*25 - tower[0];
    var dy = enemy[1]*25 - tower[1];
    
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}