class Obstacles {
    constructor(posX) {
      this.rw = 20;
      this.rh = 50;
      this.rx = posX;
      this.ry = height- random([160,260,460]);  
     
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh);
      this.spt.shapeColor="blue";
     
      this.spt.velocityX=-4;
      
    }
  
    
  
  }
  