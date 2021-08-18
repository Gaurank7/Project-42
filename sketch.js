var dockingPoint;
var bg;
var ISS , dockingShip;
var ISSimg , dockingShipimg , docking1 , docking2 , docking3;
var docked = 0;
var inProcess = 1;
var gameState = inProcess ;

function preload(){
bg = loadImage("spacebg.jpg")
ISSimg = loadImage("iss.png")
dockingShipimg = loadImage("spacecraft1.png")
docking1 = loadImage("spacecraft3.png")
docking2 = loadImage("spacecraft4.png")
docking3 = loadImage("spacecraft2.png")
}

function setup() {
  createCanvas(1365,655)

  ISS = createSprite(windowWidth/2-150,windowHeight/2-50,25,25)
  ISS.addImage(ISSimg)
  
  dockingPoint = createSprite(470,295,10,10);
  dockingPoint.visible = false;

  dockingShip = createSprite(700,550,20,20)
  dockingShip.addImage(dockingShipimg)
  dockingShip.scale = 0.15

}

function draw() {
  background(bg); 
  
  if(gameState === inProcess){

if(keyDown("left")){
 dockingShip.x -= 2 
 dockingShip.addImage(docking1)
}

if(keyDown("right")){
  dockingShip.x += 2
  dockingShip.addImage(docking2)
}

if(keyDown("up")){
  dockingShip.y -= 2
  dockingShip.addImage(docking3)
}

if(keyDown("down")){
  dockingShip.y += 2
}
  }

 if(dockingShip.isTouching(dockingPoint)){
   gameState = docked;
 }

 if(gameState === docked){
   textSize(40)
   fill("lime")
   text("DOCKING SUCCESSFUL!!!",450,500)
 }

  drawSprites();
}

