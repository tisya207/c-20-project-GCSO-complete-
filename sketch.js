var car1,wall;
var speed, weight;


function setup() {

  createCanvas(600,400);
 
 wall = createSprite(550,200,10,400);
 car1 = createSprite(100, 100, 30, 30);
 car1_speed = random(20,30);
 car1_weight = random(500,1500);
 car1.velocityX = car1_speed;

 car2 = createSprite(100, 200, 30, 30);
 car2_speed = random(16,20);
 car2_weight = random(150,500);
 car2.velocityX = car1_speed;

 car3 = createSprite(100, 300, 30, 30);
 car3_speed = random(8,12);
 car3_weight = random(100,200);
 car3.velocityX = car3_speed; 
}

function draw() {

  background(255,255,200);  
  createEdgeSprites();
  calculateDeformation(car1,car1_weight,car1_speed);
  calculateDeformation(car2,car2_weight,car2_speed);
  calculateDeformation(car3,car3_weight,car3_speed);
  drawSprites();

}

function calculateDeformation(car,weight,speed){

  if(wall.x - car.x < (car.width + wall.width)/2){
 
    car.velocityX = 0
    car.collide(wall);
    
    var deformation = 0.5 * weight * speed^2 /22500;
    console.log(deformation);

    if(deformation > 180){
    car.shapeColor = "red";
    
    }

    if(deformation<180 && deformation>80){
    car.shapeColor = "yellow";
    }

    if(deformation<80){
    car.shapeColor = "green";
    }

    }
    
}


