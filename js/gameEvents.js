

async function newWave(waveNumber) {
    for (var i=0; i < waveNumber*3; i++) {
        var enemy = new Enemy(getStart(), enemyType.SMALL);
        allEnemies.push(enemy);
        await delay();
    }
}


function moveEnemies() {
    allEnemies.forEach(function(enemy, index) {
        var next = getNextPath(enemy.position, enemy.lastPosition);
        try {
        if (isNextEnd(enemy.position)) {
            playerHP--;
            allEnemies.splice(index, 1);
            console.log("Player hp is " + playerHP);
            return;
        }
            
        } catch (error) {
            
        }
        drawImage(enemy.img, next);

        enemy.lastPosition = enemy.position;
        enemy.position = next;
    })
}

function delay() {
    return new Promise(resolve => setTimeout(resolve, 500));
}