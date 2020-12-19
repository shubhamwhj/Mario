var platforms = [];
var player;
var widthGame;
var platformGroup, wallGroup, obstacleGroup;
var obstacle;
var flag;
var gameState="PLAY";

function preload()
{
  mario=loadAnimation("images/Capture1.png","images/Capture4.png","images/Capture3.png");
  obstacle=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  flagAnimation=loadAnimation("images/Flag.png");
}

function setup() {
  createCanvas(1346, 668);
  platformGroup=new Group();
  wallGroup=new Group();
  obstacleGroup=new Group();

  player = new Player();
  player.spt.addAnimation("running",mario);
  player.spt.scale=0.02;
  frameRate(30);
  
  let countDistanceX = 0;
  let platformTemp;
  let gap;
  for (let i=0;i<14;i++)
	 {
      platformTemp = new Platform(countDistanceX);
      platformGroup.add(platformTemp.spt);

      if(i%2==0)
      {
      let wallTemp= new Walls(countDistanceX);
      wallTemp.spt.addAnimation("w1",wallAnimation);
      wallTemp.spt.scale=0.10;
      wallGroup.add(wallTemp.spt);
      }

      if(i%3==0)
      {
      let obstacleTemp=new Obstacles(countDistanceX);
      obstacleTemp.spt.addAnimation("ob1",obstacle);
      obstacleTemp.spt.scale=0.03;
      obstacleGroup.add(obstacleTemp.spt);
      }
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platformTemp.rw + gap; // 130 = gap between platforms
     }
  widthGame = countDistanceX-gap;
  flag=createSprite(widthGame-40,height-platformTemp.spt.height);
  flag.addAnimation("flagimg",flagAnimation);
  flag.scale=0.09;
  flag.setCollider("rectangle",0,0,1100,6520);
}

function draw() {
  background('skyblue');  // FFD95B #FFC46F #F4EDDD
  // camera movement
  translate(-player.spt.x + width / 2, 0);
 if(gameState==="PLAY")
 {
   
  
 
  player.applyVelocityGravity();
	playerMovementInput();
  player.spt.collide(platformGroup);
  player.spt.collide(wallGroup);
  obstacleGroup.collide(platformGroup);
  obstacleGroup.collide(wallGroup);
  obstacleGroup.velocityY=15;

  if(obstacleGroup.isTouching(player.spt) || player.spt.y>height)
  {
    gameState="END";
  }
	
  if(flag.isTouching(player.spt))
  {
    gameState="WIN";
  }

 }

 if(gameState==="END")
 {
  stroke("red");
  fill("red");
  textSize(40);
  text("GAME OVER",player.spt.x-150,300);
  obstacleGroup.destroyEach();
  player.spt.setVelocity(0,0);
  player.spt.pause();   
 }

 if(gameState==="WIN")
 {
  stroke("Green");
  fill("Green");
  textSize(40);
  text("Winner",player.spt.x-150,300);
  obstacleGroup.destroyEach();
  player.spt.setVelocity(0,0);
  player.spt.pause();  
 }

 drawSprites();
 edgeLines();
 console.log(gameState)
}





function playerMovementInput(){
	if (keyIsDown(LEFT_ARROW))  {  
    player.moveLeft();
   
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
  }
  if (keyIsDown(UP_ARROW) && player.spt.x>450) 
  {
    player.moveUp();
    console.log(player.spt.x);
   }
   
  
}
function edgeLines(){ 
	stroke('#E85243');
	strokeWeight(80);
	line(-39,0,-39,height);
	line(widthGame+39,0,widthGame+39,height);
	noStroke();
}

