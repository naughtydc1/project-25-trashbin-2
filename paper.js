class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("paper png.png");
		//this.image.scale = 0.1;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		
		World.add(world, this.body);
		
        

		

	}
	display(){
		
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			rotate(this.body.angle);
			ellipseMode(CENTER);
			//stroke("green");
			//strokeWeight(3);
			fill(255);
			//ellipse(0,0,this.r, this.r);

			image(this.image,-50,-55, 2*this.r-36,2*this.r-36);
			pop();
			
	}

}
