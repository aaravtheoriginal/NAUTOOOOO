
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

	//Create the Bodies Here.
ground=new Ground(400,695,800,15)
ball=new Ball(50,680,10)
bottom=new Dustbin(620,685,140,10)
left=new Dustbin(550,650,10,80)
	Engine.run(engine);
	right=new Dustbin(690,650,10,80)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
 ball.display()
 bottom.display()
 left.display()
 right.display()
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})

	}
}

