function Enemy(position, type) {
    this.position = position;
    this.maxHP = enemyType.properties[type].maxHP;
    this.img = enemyType.properties[type].img;
    this.hp = enemyType.properties[type].maxHP;
    this.lastPosition = position;
    this.reward = enemyType.properties[type].reward;
}

const enemy = document.getElementById('ghost');

const enemyType = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        1: {maxHP: "3", reward: "10", img: enemy},
        2: {maxHP: "10", reward: "20", img: enemy},
        3: {maxHP: "50", reward: "100", img: enemy},
    }
};