
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground,Paper,engine,world,roof,Dustbin;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	
	 
	 Dustbin = new dustbin(900,350);
	 Paper = new paper(100,340,70);
	 //Paper.velocityY += 0.2;
	 ground = new Ground(600,370,1200,10);
	 //roof = new Ground(600,30,1200,10);

	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
   
    
	 Dustbin.display();
	 Paper.display();
	 ground.display();
	 //roof.display();
	 drawSprites();
   
}
  
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:245,y:-245});
  
	}
}

 



