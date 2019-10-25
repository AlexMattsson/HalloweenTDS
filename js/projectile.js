function Projectile(position, target, sender) {
    this.sender = sender;
    this.position = position;
    this.target = target;
    this.img = projectile;
}

const projectile = document.getElementById('projectile');