var characterimg,ch;
var monsterimg;
var bgimage,bg;


function preload(){
  characterimg = loadAnimation("images/c1.gif", "images/c2.gif", "images/c3.gif", "images/c4.gif", "images/c5.gif", "images/c6.gif", "images/c7.gif", "images/c8.gif", "images/c9.gif", "images/c10.gif", "images/c11.gif", "images/c12.gif", "images/c13.gif" )
  monsterimg = loadAnimation(" images/m1.gif","images/m2.gif", "images/m3.gif", "images/m4.gif", "images/m5.gif", "images/m6.gif", "images/m7.gif", "images/m8.gif", "images/m9.gif", "images/m10.gif", "images/m11.gif", "images/m12.gif", "images/m13.gif")
  bgimage = loadImage("images/junglebg.gif")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2-300);
  bg.addImage(bgimage);
  bg.scale = 4.7;
  bg.velocityX = -5
  
  monster = createSprite(75, height-100);
  monster.addAnimation("monster",monsterimg);
  


  
}

function draw() {
  
  background(255);
  
   if(bg.x<200){
     bg.x = width/2
   }
  
  
  drawSprites();
}

