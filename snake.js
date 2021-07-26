class Snake {
    constructor(x, y, c) {
        this.body = Bodies.circle(x, y, 30 / 2, { isStatic: c });
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill('blue');
        noStroke();
        ellipseMode(CENTER);
        ellipse(0, 0, 30, 30);
        pop();
    }
    destr() {
        World.remove(world, this.body);
    }
}