const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,100,50)
	paper2 = new Paper(100,100,50)
	paper3 = new Paper(100,100,50)
	paper4 = new Paper(100,100,50)
	paper5 = new Paper(100,100,50)
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  
}




