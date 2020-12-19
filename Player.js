class Player {
	
	constructor() {
		this.location = createVector(width/2, 200);
		this.velocity = createVector(0, 0);
		this.acceleration  = createVector(0, 0.6);
		this.colour = color('#198BC6');  //   #1B998B #6F8CFB
		this.radius = 30;
		this.side=0;		 
		this.speedX=12;
		this.spt=createSprite(this.location.x, this.location.y, this.radius,this.radius);
		this.spt.shapeColor="blue";

	}
	 
    applyVelocityGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
    }
	
	moveLeft(){
    this.spt.x = constrain(this.spt.x-this.speedX, this.spt.width, widthGame-this.spt.width);
  }

  moveRight(){
    this.spt.x = constrain(this.spt.x+this.speedX, this.spt.width, widthGame-this.spt.width);
  }
	
	moveUp() {
           this.spt.velocityY=-18;
    	}
}