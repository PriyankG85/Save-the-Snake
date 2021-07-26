const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Detector = Matter.Detector;

var engine, world;
var bgImg;
var bound1, bound2;
var hidden, snake1, snake2, snake3, snake4, snake5, snake6;
var sling1, sling2, sling3, sling4, sling5, sling6;
var obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10, obs11, obs12;
var fl, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
var x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12;

function preload() {

}

function setup() {
  createCanvas(windowWidth / 2 - 110, windowHeight);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0.5;

  x1 = random([width - 55, 55, 350, width/2-30]);
  x2 = random([width - 55, 55, 350, width/2-30]);
  x3 = random([width - 55, 55, 350, width/2-30]);
  x4 = random([width - 55, 55, 350, width/2-30]);
  x5 = random([width - 55, 55, 350, width/2-30]);
  x6 = random([width - 55, 55, 350, width/2-30]);
  x7 = random([width - 55, 55, 350, width/2-30]);
  x8 = random([width - 55, 55, 350, width/2-30]);
  x9 = random([width - 55, 55, 350, width/2-30]);
  x10 = random([width - 55, 55, 350, width/2-30]);
  x11 = random([width - 55, 55, 350, width/2-30]);
  x12 = random([width - 55, 55, 350, width/2-30]);
  c1 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c2 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c3 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c4 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c5 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c6 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c7 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c8 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c9 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c10 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c11 = random(['purple', 'green', 'red', 'silver', 'grey'])
  c12 = random(['purple', 'green', 'red', 'silver', 'grey'])
  s1 = random([100, 80])
  s2 = random([100, 80])
  s3 = random([100, 80])
  s4 = random([100, 80])
  s5 = random([100, 80])
  s6 = random([100, 80])
  s7 = random([100, 80])
  s8 = random([100, 80])
  s9 = random([100, 80])
  s10 = random([100, 80])
  s11 = random([100, 80])
  s12 = random([100, 80])

  // All Bodies

  var ground = createSprite(width / 2, height - 3, width, 6);
  ground.shapeColor = 'black';

  obs1 = new Obstacle(x1, -100, s1, s1, c1);
  obs2 = new Obstacle(x2, -1000, s2, s2, c2);
  obs3 = new Obstacle(x3, -1600, s3, s3, c3);
  obs4 = new Obstacle(x4, -2400, s4, s4, c4);
  obs5 = new Obstacle(x5, -3400, s5, s5, c5);
  obs6 = new Obstacle(x6, -4800, s6, s6, c6);
  obs7 = new Obstacle(x7, -5600, s7, s7, c7);
  obs8 = new Obstacle(x8, -6000, s8, s8, c8);
  obs9 = new Obstacle(x9, -6600, s9, s9, c9);
  obs10 = new Obstacle(x10, -7400, s10, s10, c10);
  obs11 = new Obstacle(x11, -8000, s11, s11, c11);
  obs12 = new Obstacle(x12, -8800, s12, s12, c12);

  bound1 = new Stand(1, height / 2, 2, height + 400, 'black', true);
  bound2 = new Stand(width - 1, height / 2, 2, height + 400, 'black', true);
  fl = new Stand(width / 2, -9200, width - 10, 10, 'aliceblue', false);
  // hidden = new Snake(width/2, height/2, true);
  snake1 = new Snake(width / 2, height / 2, true);
  snake2 = new Snake(width / 2, height / 2 + 30, false);
  snake3 = new Snake(width / 2, height / 2 + 60, false);
  snake4 = new Snake(width / 2, height / 2 + 90, false);
  snake5 = new Snake(width / 2, height / 2 + 120, false);
  // snake6 = new Snake(width/2, height/2+150, false);

  // sling0 = new SlingShot(hidden.body, snake1.body);
  sling1 = new SlingShot(snake1.body, snake2.body);
  sling2 = new SlingShot(snake2.body, snake3.body);
  sling3 = new SlingShot(snake3.body, snake4.body);
  sling4 = new SlingShot(snake4.body, snake5.body);
  // sling5 = new SlingShot(snake5.body, snake6.body);
  // console.log(s1);
}

function draw() {
  background('aliceblue');
  Engine.update(engine);

  // text('Press Enter to Play', width/2-100, height/2);

  translate(0, snake1.body.position.y - height / 2);
  obs1.display(height+100);
  obs2.display(height+100);
  obs3.display(height+100);
  obs4.display(height+100);
  obs5.display(height+100);
  obs6.display(height+100);
  obs7.display(height+100);
  obs8.display(height+100);
  obs9.display(height+100);
  obs10.display(height+100);
  obs11.display(height+100);
  obs12.display(height+100);
  bound1.display();
  bound2.display();
  snake1.display();
  snake2.display();
  snake3.display();
  snake4.display();
  snake5.display();
  fl.display();
  // snake6.display();
  // console.log(snake1.body.position);
  
  fill('grey');
  textSize(40);
  text('Drag your mouse to move the Snake.', 80, 50);

  drawSprites();

  if (fl.ground.position.y > height / 2 - 100) {
    // console.log('you win');
    bg = createSprite(width / 2, height / 2, width, height);
    bg.shapeColor = 'aliceblue';

    fill('black');
    textSize(50);
    text('Congratulations', width / 2 - 170, height / 2 - 100);
    fill('green');
    textSize(30);
    text('You finish the Game', width / 2 - 120, height / 2 - 50);

  }

  if (isTouching(obs1, snake1) || isTouching(obs2, snake1)
    || isTouching(obs3, snake1) || isTouching(obs4, snake1)
    || isTouching(obs5, snake1) || isTouching(obs6, snake1)
    || isTouching(obs7, snake1) || isTouching(obs8, snake1)
    || isTouching(obs9, snake1) || isTouching(obs10, snake1)
    || isTouching(obs11, snake1) || isTouching(obs12, snake1)
    || isTouching(obs1, snake2) || isTouching(obs2, snake2)
    || isTouching(obs3, snake2) || isTouching(obs4, snake2)
    || isTouching(obs5, snake2) || isTouching(obs6, snake2)
    || isTouching(obs7, snake2) || isTouching(obs8, snake2)
    || isTouching(obs9, snake2) || isTouching(obs10, snake2)
    || isTouching(obs11, snake2) || isTouching(obs12, snake2)
    || isTouching(obs1, snake3) || isTouching(obs2, snake3)
    || isTouching(obs3, snake3) || isTouching(obs4, snake3)
    || isTouching(obs5, snake3) || isTouching(obs6, snake3)
    || isTouching(obs7, snake3) || isTouching(obs8, snake3)
    || isTouching(obs9, snake3) || isTouching(obs10, snake3)
    || isTouching(obs11, snake3) || isTouching(obs12, snake3)
    || isTouching(obs1, snake4) || isTouching(obs2, snake4)
    || isTouching(obs3, snake4) || isTouching(obs4, snake4)
    || isTouching(obs5, snake4) || isTouching(obs6, snake4)
    || isTouching(obs7, snake4) || isTouching(obs8, snake4)
    || isTouching(obs9, snake4) || isTouching(obs10, snake4)
    || isTouching(obs11, snake4) || isTouching(obs12, snake4)
    || isTouching(obs1, snake5) || isTouching(obs2, snake5)
    || isTouching(obs3, snake5) || isTouching(obs4, snake5)
    || isTouching(obs5, snake5) || isTouching(obs6, snake5)
    || isTouching(obs7, snake5) || isTouching(obs8, snake5)
    || isTouching(obs9, snake5) || isTouching(obs10, snake5)
    || isTouching(obs11, snake5) || isTouching(obs12, snake5)) {
    // console.log('game over');
    Body.setStatic(obs1.body, true);
    Body.setStatic(obs2.body, true);
    Body.setStatic(obs3.body, true);
    Body.setStatic(obs4.body, true);
    Body.setStatic(obs5.body, true);
    Body.setStatic(obs6.body, true);
    Body.setStatic(obs7.body, true);
    Body.setStatic(obs8.body, true);
    Body.setStatic(obs9.body, true);
    Body.setStatic(obs10.body, true);
    Body.setStatic(obs11.body, true);
    Body.setStatic(obs12.body, true);
    Body.setStatic(snake2.body, true);
    Body.setStatic(snake3.body, true);
    Body.setStatic(snake4.body, true);
    Body.setStatic(snake5.body, true);
    engine.world.gravity.y = 0;
    bg = createSprite(width / 2, height / 2, width, height);
    bg.shapeColor = 'aliceblue';
    fill('red');
    textSize(60);
    text('Game Over', width / 2 - 150, height / 2 - 50);

  }

}

function mouseDragged() {
  // Body.setPosition(hidden.body, {x:mouseX, y:hidden.body.position.y});

  if (isTouching(obs1, snake1) || isTouching(obs2, snake1)
    || isTouching(obs3, snake1) || isTouching(obs4, snake1)
    || isTouching(obs5, snake1) || isTouching(obs6, snake1)
    || isTouching(obs7, snake1) || isTouching(obs8, snake1)
    || isTouching(obs9, snake1) || isTouching(obs10, snake1)
    || isTouching(obs11, snake1) || isTouching(obs12, snake1)
    || isTouching(obs1, snake2) || isTouching(obs2, snake2)
    || isTouching(obs3, snake2) || isTouching(obs4, snake2)
    || isTouching(obs5, snake2) || isTouching(obs6, snake2)
    || isTouching(obs7, snake2) || isTouching(obs8, snake2)
    || isTouching(obs9, snake2) || isTouching(obs10, snake2)
    || isTouching(obs11, snake2) || isTouching(obs12, snake2)
    || isTouching(obs1, snake3) || isTouching(obs2, snake3)
    || isTouching(obs3, snake3) || isTouching(obs4, snake3)
    || isTouching(obs5, snake3) || isTouching(obs6, snake3)
    || isTouching(obs7, snake3) || isTouching(obs8, snake3)
    || isTouching(obs9, snake3) || isTouching(obs10, snake3)
    || isTouching(obs11, snake3) || isTouching(obs12, snake3)
    || isTouching(obs1, snake4) || isTouching(obs2, snake4)
    || isTouching(obs3, snake4) || isTouching(obs4, snake4)
    || isTouching(obs5, snake4) || isTouching(obs6, snake4)
    || isTouching(obs7, snake4) || isTouching(obs8, snake4)
    || isTouching(obs9, snake4) || isTouching(obs10, snake4)
    || isTouching(obs11, snake4) || isTouching(obs12, snake4)
    || isTouching(obs1, snake5) || isTouching(obs2, snake5)
    || isTouching(obs3, snake5) || isTouching(obs4, snake5)
    || isTouching(obs5, snake5) || isTouching(obs6, snake5)
    || isTouching(obs7, snake5) || isTouching(obs8, snake5)
    || isTouching(obs9, snake5) || isTouching(obs10, snake5)
    || isTouching(obs11, snake5) || isTouching(obs12, snake5)) {
    Body.setPosition(snake1.body, { x: snake1.body.position.x, y: snake1.body.position.y });
  }
  else {
    Body.setPosition(snake1.body, { x: mouseX, y: snake1.body.position.y });
  }
}
