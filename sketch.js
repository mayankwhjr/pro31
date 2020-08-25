

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  ground= new Ground(240,785,480,30)
  
	
	Engine.run(engine);
  
}
var divisionHeight=300;
var particles=[];
var plinkos = [];
var divisions = [];
function draw() {
  rectMode(CENTER);
  background(255,255,255);
   for(var k=0;k <=width;k = k+80) {
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
   }
   for(var j=40;j <=width;j = j+50) {
plinkos.push(new Plinko(j,75))
   }
   for(var j= 15;j <=width-10;j=j+50) {
plinkos.push(new Plinko(j,175))
   }
   for(var j=65;j <=width;j = j+50) {
    plinkos.push(new Plinko(j,-25))
       }
       for(var j=90;j <=width;j = j+50) {
        plinkos.push(new Plinko(j,-125))
           }
   for(var j =0;j < particles.length;j++) {
particles [j].display();
   }
   for(var k=0;k <divisions.length;k++) {
divisions [k].display();
   }
   if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10))
   }
  ground.display();
 

}