var box;

function setup() {
  createCanvas(400,400);
  background(30);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  

  

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("white")
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("blue")
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green")
  }
if (keyIsDown(RIGHT_ARROW))
{
  background("red")
}

  drawSprites();
}




