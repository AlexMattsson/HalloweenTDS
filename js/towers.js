function Tower(position, type) {
    this.position = position;
    this.damage = towerType.properties[type].damage;
    this.img = towerType.properties[type].img;
}

const image = document.getElementById('tower');

const towerType = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
    properties: {
        1: {damage: "1", img: image},
        2: {damage: "5", img: image},
        3: {damage: "15", img: "#EC14C8"},
    }
};