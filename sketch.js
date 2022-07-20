
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

var engine, world;

var chance = 0;

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);
	

	var ball_option={
		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2
	}


	ball=Bodies.circle(260,100,30,ball_option);
	World.add(world,ball);

	
	Engine.run(engine);

	

		


	

  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  
  

  groundObj.display();
  leftSide.display();
  rightSide.display();

  fill("white");

	ellipse(ball.position.x,ball.position.y,30,30);	



	

  

  drawSprites();
 

}

function keyPressed(){
	if(keyCode === UP_ARROW && chance == 0){
		console.log("up key pressed")
		Matter.Body.applyForce(ball,ball.position,{x:190,y:-220});
		chance = 1;
	}
}





