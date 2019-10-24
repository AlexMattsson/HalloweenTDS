function Tower(position, type) {
    this.position = position;
    this.damage = towerType.properties[type].damage;
    this.range = towerType.properties[type].range;
    this.img = towerType.properties[type].img;
}

const image = document.getElementById('tower');
const image2 = document.getElementById('tower2');

const towerType = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        1: {damage: "1", range: "75", img: image},
        2: {damage: "5", range: "150", img: image2},
        3: {damage: "15", range: "20", img: "#EC14C8"},
    }
};