class SlingShot {
    constructor(bodyA, bodyB) {

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.2,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    // attach(body) {
    //     this.sling.bodyA = body;
    // }
    // fly() {
    //     this.sling.bodyA = null;
    // }
}