const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var basket1, basket2;
var ground, hold, hold2, con;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world

  // All Bodies
  
  basket1 = new Stand(width-100, 250, 200, 15, 'skyblue', true);

  ground = new Stand(width/2, height, width, 150, 'silver', true);
  hold = new Stand(width/3, height-100, 20, 100, 'yellow', false);
  hold2 = new Stand(width/3-200, height-120, 20, 100, 'yellow', false);

  con = new Stand(width/3-20, height-200, 440, 20, 'lightgreen', false);

}

function draw() {
  background('aliceblue');
  Engine.update(engine);

  ground.display();
  basket1.display();
  hold.display();
  hold2.display();
  // basket2.display();
  con.display();

  drawSprites();

}

function mouseDragged() {

}
function mouseReleased() {

}
