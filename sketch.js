const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var Ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(960,320,70,70);
    box2 = new Box(780,320,70,70);
    Ground1 = new Ground(600,390,1200,20);
   
    pig1 = new Pig(870,320);
    log1 = new log(870,260,300,PI/2);

    box3 = new Box(960,250,70,70);
    box4 = new Box(780,250,70,70);
    log2 = new log(870,160,300,PI/2);
    pig2 = new Pig(870,210);
    
    
    box5 = new Box(870,160,70,70);
    log3 = new log(800,110,160,PI/7);
    log4 = new log(900,110,160,-PI/7);
    bird1 = new Bird(80,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    pig2.display();
    log3.display();
    log4.display();
    bird1.display();
}