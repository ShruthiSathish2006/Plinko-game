const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 790, 480, 10);  
  division1 = new Divisions(80,650,10,300);
  division2 = new Divisions(160,650,10,300);
  division3 = new Divisions(240,650,10,300);
  division4 = new Divisions(320,650,10,300);
  division5 = new Divisions(400,650,10,300);
  division6 = new Divisions(480,650,10,300);
  division7 = new Divisions(0,650,10,300);
  plinko1 = new Plinko(40,50,20);
  plinko2 = new Plinko(120,50,20);
  plinko3 = new Plinko(200,50,20);
  plinko4 = new Plinko(280,50,20);
  plinko5 = new Plinko(360,50,20);
  plinko6 = new Plinko(440,50,20);
  plinko7 = new Plinko(80,150,20);
  plinko8 = new Plinko(160,150,20);
  plinko9 = new Plinko(240,150,20);
  plinko10 = new Plinko(320,150,20);
  plinko11 = new Plinko(400,150,20);
  plinko12 = new Plinko(480,150,20);
  plinko13 = new Plinko(0,150,20);
  plinko14 = new Plinko(40,250,20);
  plinko15 = new Plinko(120,250,20);
  plinko16 = new Plinko(200,250,20);
  plinko17 = new Plinko(280,250,20);
  plinko18 = new Plinko(360,250,20);
  plinko19 = new Plinko(440,250,20);
  plinko20 = new Plinko(80,350,20);
  plinko21 = new Plinko(160,350,20);
  plinko22 = new Plinko(240,350,20);
  plinko23 = new Plinko(320,350,20);
  plinko24 = new Plinko(400,350,20);
  plinko25 = new Plinko(480,350,20);
  plinko26 = new Plinko(0,350,20);
  plinko27 = new Plinko(40,450,20);
  plinko28 = new Plinko(120,450,20);
  plinko29 = new Plinko(200,450,20);
  plinko30 = new Plinko(280,450,20);
  plinko31 = new Plinko(360,450,20);
  plinko32 = new Plinko(440,450,20);


}

function newParticle(){
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 15));
  }
  
  }


function draw() {
  Engine.update(engine);
  background(0);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();

  newParticle();

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
    }



  }
 

