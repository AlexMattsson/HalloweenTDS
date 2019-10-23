function Enemy(position, type) {
    this.position = position;
    this.maxHP = enemyType.properties[type].maxHP;
    this.img = enemyType.properties[type].img;
    this.hp = enemyType.properties[type].maxHP;
    this.lastPosition = position;
}

const enemy = document.getElementById('ghost');

const enemyType = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        1: {maxHP: "5", img: enemy},
        2: {maxHP: "15", img: enemy},
        3: {maxHP: "45", img: "#EC14C8"},
    }
};