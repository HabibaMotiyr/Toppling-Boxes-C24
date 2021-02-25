const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(800,380,80,80);
    box2 = new Box(1000,380,80,80);
    pig1=new Pig(900,380);
    log1=new Log(900,350,300,PI/2);
    box3 = new Box(800,330,80,80)
    box4 = new Box(1000,330,80,80);
    Pig2 =new Pig(900,330);
    log2= new Log(900,280, 300, PI/2);
    box5 = new Box(900,250,80,80);
    log3 = new Log(850,250,150,PI/7);
    log4 = new Log(950,250,150,-PI/7);
    bird= new Bird(100,100);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    
   
}