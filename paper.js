class paper
{
	constructor(x,y,width,height)
	{
		var op=
		{
			'isStatic':false,
			'restitution':1,
			'friction':0.5,
			'density':1.2
		}
				
		this.Body=Bodies.rectangle(x,y,width,height,op);
		this.image = loadImage("paper.png");		
		this.width=width;
		this.height=height;
		World.add(world, this.Body);
	}
	display()
	{
			var pos=this.Body.position;
			var angle =this.Body.angle;
			push();
			translate(pos.x,pos.y);
			rotate(angle);
			imageMode(CENTER);
			fill(255);
			//rect(pos.x,pos.y,this.wiidth,this.height);
			image(this.image,0,0,this.Body.width, this.Body.height);
			
			pop();
			
	}

}
