function drawMap(ctx) {

    var map = map;
    for (var i=0; i<this.map.length; i++) {
        for (var k=0; k<this.map[i].length; i++) {
            if(this.map[i] == ".") {
                this.ctx.fillStyle = '#D6320F';
                this.ctx.fillRect(0, 0, 25, 25);
            }
        }
    }
}