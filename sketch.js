var fixedrect;
var movivngrect;
var BoxA
var BoxB

function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="red";
  fixedrect.debug=true;

  BoxA=createSprite(100, 150, 50, 50);
  BoxA.shapeColor="red";
  BoxA.debug=true;

  BoxB =createSprite(100, 350, 50, 50);
  BoxB.shapeColor="red";
  BoxB.debug=true;

  movingrect=createSprite(400, 200, 100, 20);
  movingrect.shapeColor="red";
  movingrect.debug=true;

  BoxA.velocityY =+3;
  BoxB.velocityY = -3;
}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
   
    if(isTouching(movingrect,fixedrect)){

      fixedrect.shapeColor="blue";
      movingrect.shapeColor="blue";

    }  
    else
    {
      fixedrect.shapeColor="red";
      movingrect.shapeColor="red";
    }

    bounceoff(BoxA,BoxB);


  drawSprites();

}