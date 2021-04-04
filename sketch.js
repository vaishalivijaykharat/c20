var cat,c1,c2,c3,c4;
var ma,m1,m2,m3,m4;
var g,g1;
function preload(){
c1=loadImage("cat1.png");
c2=loadImage("cat2.png");
c3=loadImage("cat3.png");
c4=loadImage("cat1.png");

m1=loadImage("mouse1.png");
m2=loadImage("mouse2.png");
m3=loadImage("mouse3.png");
m4=loadImage("mouse4.png");

g1=loadImage("garden.png");

}



function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
var cat=createSprite(800,600,50,50);
cat.addImage("cat1",c1);
var ma=createSprite(200,600,30,30);
ma.addImage("ma",m1);

var g=createSprite(200,200,windowWidth,windowHeight);
g.addImage("g",g1);
}

function draw() {

    background(255);
    //Write condition here to  if tom and jerry collide
if(cat.x-ma.x<(cat.width-ma.width)/2){
cat.addAnimation("cat3",c3);

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keycode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("cat2",c2);
cat.changeAnimation("cat2");
}

}
