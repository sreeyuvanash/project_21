var bullet,wall;
var weight,speed,thicknes;

function setup() {
  createCanvas(2000,1000);

  thicknes=random(20,80);
  speed=random(50,100);
  weight=random(500,1500);
  
  wall=createSprite(1500, 200, 50, 200);
  wall.shapeColor="white";
  wall.width=thicknes;

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

}

function draw() {
  background("black"); 

  console.log("hi");
  
  colider(bullet,wall,wall);

  drawSprites();
}

