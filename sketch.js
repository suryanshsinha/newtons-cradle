
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1= new Roof(400,200,500,30);
  bob1= new Bob(400,500,100)
  rope1= new Rope(roof1.body,bob1.body,0,0)
  bob2= new Bob(300,500,100)
  rope2= new Rope(roof1.body,bob2.body,-100,0)
  bob3=new Bob(200,500,100)
  rope3= new Rope(roof1.body,bob3.body,-200,0)
  bob4= new Bob(100,500,100)
  rope4= new Rope(roof1.body,bob4.body,100,0)
  bob5= new Bob(-100,500,100)
  rope5= new Rope(roof1.body,bob5.body,200,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
roof1.display();
bob1.display();
rope1.display(); 
bob2.display()
rope2.display()
bob3.display()
rope3.display()
bob4.display()
rope4.display()
bob5.display()
rope5.display()
}



