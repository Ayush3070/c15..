var runnerImg, pathImg,path, runner, path, pathImg, coin, coinImg, coinscore;
function preload(){
 
  runnerImg=loadAnimation("Runner-1.png", "Runner-2.png",);
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("runner", runnerImg);
  runner.scale = 0.1;
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  
 
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score', 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  }
  if(runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }

  drawSprites();
} 



