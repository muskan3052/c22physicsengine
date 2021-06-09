const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter. Bodies
var ground, ball
var MyWorld, MyEngine;
function setup() {
  createCanvas(800,400);
  MyEngine = Engine.create();
  MyWorld = MyEngine.world;
  var groundOptions={
    isStatic:true
  }
  ground = Bodies.rectangle(400, 370, 800, 30, groundOptions)
  World.add(MyWorld, ground)
  var ballOption={
    restitution:1
  }
  ball = Bodies.circle(400, 200, 30, ballOption)
  World.add(MyWorld, ball)
}

function draw() {
  background(0);  
  Engine.update(MyEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y, 800, 30)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30)
  drawSprites();
}