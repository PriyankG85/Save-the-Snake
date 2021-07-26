class Stand {
    constructor(x, y, width, height, c, s) {

        this.ground = Bodies.rectangle(x, y, width, height, {isStatic:s});
        World.add(world, this.ground);
        this.width = width;
        this.height = height;
        this.c = c;
    }
    display() {
        var pos = this.ground.position;
        push();
        translate(pos.x, pos.y);
        fill(this.c);
        noStroke();
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}