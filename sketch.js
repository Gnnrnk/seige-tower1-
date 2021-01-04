
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var pentagon;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box25,box27,box28,
box29,box30;
var score,tries;


function preload()
{

}

function setup() {
  
  createCanvas(1000,400);
 score= 0;
 tries = 0;
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(390+60,310,270,12);
  ground2 = new Ground(740+60,225,210,12);
  ground3=new Ground(500,390,1000,20);

  pentagon=new Polygon(200,200,20);


  
  chain=new Chain(pentagon.body,{x:180,y:190})

  box1 = new Blue(300+60,275,30,40);
  box2 = new Blue(330+60,275,30,40);
  box3 = new Blue(360+60,275,30,40);
  box4 = new Blue(390+60,275,30,40);
  box5 = new Blue(420+60,275,30,40);
  box6 = new Blue(450+60,275,30,40);
  box7 = new Blue(480+60,275,30,40);
  box8 = new Pink(330+60,235,30,40);
  box9 = new Pink(360+60,235,30,40);
 box10 = new Pink(390+60,235,30,40);
 box11 = new Pink(420+60,235,30,40);
 box12 = new Pink(450+60,235,30,40);
 box13 = new Green(360+60,195,30,40);
 box14 = new Green(390+60,195,30,40);
 box15 = new Green(420+60,195,30,40);
 box16 = new Yellow(390+60,155,30,40);
 box17 = new Blue(800-60,205,30,40);
 box18 = new Blue(800-30,205,30,40);
 box19 = new Blue(800,205,30,40);
 box20 = new Blue(800+30,205,30,40);
 box21 = new Blue(800+60,205,30,40);
 box22 = new Pink(800-30,205-40,30,40);
 box23 = new Pink(800,205-40,30,40);
 box24 = new Pink(800+30,205-40,30,40);
 box25 = new Green(800,205-80,30,40);

}

function draw() {

 
  background(48,6,6); 
  text("Press Space to get a Second Chance to Play!!!",200,200)


 if(tries===8){
    textSize(60);
    text("You lose!",100,100);
  }

    text("Score: "+score,550,150);
    text("Attempts: "+tries,850,150);

  Engine.update(engine);
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  
  chain.display();
  pentagon.display();
  ground1.display();
  ground2.display();
  ground3.display();

  


  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
  
}

function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
   chain.fly();
   tries = tries+1
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    chain.attacher(pentagon.body);
    score = score+1
  }
}