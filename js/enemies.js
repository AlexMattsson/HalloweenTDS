function Enemy(position, type) {
    this.position = position;
    this.maxHP = enemyType.properties[type].maxHP;
    this.img = enemyType.properties[type].img;
    this.hp = enemyType.properties[type].maxHP;
    this.lastPosition = position;
}

const enemyType = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        1: {maxHP: "5", img: "#EC14C8"},
        2: {maxHP: "15", img: "#EC14C8"},
        3: {maxHP: "45", img: "#EC14C8"},
    }
};