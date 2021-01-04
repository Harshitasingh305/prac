
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var canvas,box1,box2,ground,pig1,log1;
function setup() {
 canvas=createCanvas(1200,400);
 engine= Engine.create();
 world=engine.world;
 box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
pig1 = new Pig(810, 350);
 log1= new Log(810,260,300,PI/2)
 log4 = new Log(760,120,150,PI/7);
 log5 = new Log(870,120,150,-PI/7);
log3 =  new Log(810,180,300,PI/2);
    pig3 = new Pig(810, 220);


 ground=new Ground(600,height,1200,30)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 ground.display()
 pig1.display()
 pig3.display()
 log1.display()
log4.display()
 log5.display()
 log3.display()
  drawSprites();
}