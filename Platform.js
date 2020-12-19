// Creating platform class, objects will be created according to posX.



class Platform {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]);
          this.rx = posX;
      this.ry = height;   //height - heightPlatform
     // this.colour = color('Green'); // red
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh);
      this.spt.shapeColor="green";
    
    }
  
  
  }
  
  