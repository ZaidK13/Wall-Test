var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
}
thickness=random(22,83)
function draw() {
  background(255,255,255);  
 if(isTouching(bullet,wall)){
   wall.shapeColor = "red"
   bullet.shapeColor = "red"
 }
 else{
   bullet.shapeColor = "green"
   wall.shapeColor = "green"
 }
 if(wall.x-bullet.x < (bullet.width+wall.width)/2)
 {
   bullet.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     bullet.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100)
   {
     bullet.shapeColor=color(230,230,0);
     
   }
   if(deformation<100)
   {
     bullet.shapeColor=color(0,255,0);
   }
 }


  drawSprites();
}
function isTouching(bullet,wall){
    if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
    return true;
  }
  else {
    return false;
  }
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
}