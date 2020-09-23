
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var umbrella = [];
  var drop = [];

  var umbrellaHeight=300;

 

function setup(){
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  for (var i = 0; i <=width; i = i + 0) {
    umbrella.push(new Umbrella(i, height-umbrellaHeight/2, 10, umbrellaHeight));
  }
   
}

function draw(){
  background("black");
  Engine.update(engine);
 if(frameCount%60===0){
   Drops.push(new Drops(random(width/2-30, width/2+30),10,10));
 }

 for (var j = 0; j<drops.length; j++){

   drop[j].display();
 }
  for (var i = 0; i < umbrella.length; i++) {
    
    umbrella[i].display();

  }    
}
    


