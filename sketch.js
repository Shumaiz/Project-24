var car,wall;
var speed,weight;
var car2,car3;
function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
car = createSprite(50,100,50,50);
car2 = createSprite(50,200,50,50);
car3 = createSprite(50,300,50,50);
wall = createSprite(800,200,60,height/2);
}

function draw() {
  background(255,255,255);
  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight *speed * speed/22509;
    if (deformation>180){
      car.shapecolor =color("red");
    }
if(deformation<180 && deformation>100){
  car.shapecolor = color("green");
}
if(deformation<100){
  car.shapecolor = color("yellow")
}
  }

  if(wall.x-car2.x < (car2.width+wall.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight *speed * speed/22509;
    if (deformation>180){
      car2.shapecolor =color("red");
    }
if(deformation<180 && deformation>100){
  car2.shapecolor = color("green");
}
if(deformation<100){
  car2.shapecolor = color("yellow")
}
  }

  if(wall.x-car3.x < (car3.width+wall.width)/2){
    car3.velocityX = 0;
    var deformation = 0.5 * weight *speed * speed/22509;
    if (deformation>180){
      car3.shapecolor =color("red");
    }
if(deformation<180 && deformation>100){
  car3.shapecolor = color("green");
}
if(deformation<100){
  car3.shapecolor = color("yellow")
}
  }
  drawSprites();
}