const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var bird, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 =new Ground(700,height-100,500,10);


    box1 = new Box(700,-100,70,70);
    box2 = new Box(700,-100,70,70);


    box3 = new Box(720,-100,70,70);
    box4 = new Box(720,-100,70,70);



    box5 = new Box(700,-100,70,70);
   
    bird = new Bird(100,100);

    
   slingShot = new Slingshot(bird.body,{x:100,y:300});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground1.display();
   
    

    box3.display();
    box4.display();
  


    box5.display();
    
    bird.display();

    
    slingShot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
