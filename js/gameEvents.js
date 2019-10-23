
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


function newTower(position, type) {
    if (isAllowedTurret(position)) {
        var tower = new Tower(position, type);
        allTowers.push(tower);
    } else {
        console.log("DENNIED");
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}