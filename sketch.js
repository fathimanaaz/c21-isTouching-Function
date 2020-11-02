var fixedRect;
var movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(800,600);
  fixedRect = createSprite(350, 300, 50, 80);
  movingRect = createSprite(500,200,80,50);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);

  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

  gameObject1.shapeColor="green"
  gameObject2.shapeColor="green"
  gameObject3.shapeColor="green" 

  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background("black");  

  movingRect.y=mouseY;
  movingRect.x=mouseX;
  
  

  if(isTouching(movingRect,fixedRect)===true){
    fixedRect.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    fixedRect.shapeColor="green"
    //movingRect.shapeColor="green"
  }

  if(isTouching(movingRect,gameObject1)===true){
    gameObject1.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    gameObject1.shapeColor="green"
    //movingRect.shapeColor="green"
  }

  if(isTouching(movingRect,gameObject2)===true){
    gameObject2.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    gameObject2.shapeColor="green"
    //movingRect.shapeColor="green"
  }
  
  if(isTouching(movingRect,gameObject3)===true){
    gameObject3.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    gameObject3.shapeColor="green"
    //movingRect.shapeColor="green"
  }

  drawSprites();
}
 
function isTouching(object1,object2){
  if(object1.x-object2.x <=object2.width/2 + object1.width/2
    && object2.x-object1.x <=object2.width/2 + object1.width/2
    && object1.y-object2.y <=object2.height/2 + object1.height/2
    && object2.y-object1.y <=object2.height/2 + object1.height/2){
    
    return true;

  }
  else{

    return false;

  }
}