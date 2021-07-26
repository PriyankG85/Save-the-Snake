class Obstacle {
    constructor(x, y, w, h, c) {
        this.body = Bodies.rectangle(x, y, w, h, { isStatic: false });
        this.w = w;
        this.h = h;
        this.c = c;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        fill(this.c);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();

        if (this.body.position.y > 950) {
            World.remove(world, this.body)
        }
    }
}