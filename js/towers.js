function Tower(position, type) {
    this.position = position;
    this.damage = towerType.properties[type].damage;
    this.range = towerType.properties[type].range;
    this.img = towerType.properties[type].img;
    this.cost = towerType.properties[type].cost;
}

const image = document.getElementById('tower');
const image2 = document.getElementById('tower2');

const towerType = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        1: {damage: "1", range: "100", cost: "25", img: image},
        2: {damage: "3", range: "150", cost: "100", img: image2},
        3: {damage: "15", range: "250", cost: "200", img: image2},
    }
};

function getTowerPos(tower) {
    return tower.position;
}