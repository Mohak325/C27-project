const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world
var Bob1,Bob2,Bob3,Bob4,Bob5,roof
var string1,string2,string3,string4,string5

function setup(){
	createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;
	roof = new Roof(300,140)
	Bob1 = new Bob(200,400);
	Bob2 = new Bob(240,400);
	Bob3 = new Bob(280,400);
	Bob4 = new Bob(320,400);
	Bob5 = new Bob(360,400);
	string1 = new String(Bob1.body,{x:200,y:160});
	string2 = new String(Bob2.body,{x:240,y:160});
	string3 = new String(Bob3.body,{x:280,y:160});
	string4 = new String(Bob4.body,{x:320,y:160});
	string5 = new String(Bob5.body,{x:360,y:160});

}
function draw(){
background(255);
Engine.run(engine);
roof.display();
Bob1.display();
Bob2.display();
Bob3.display();
Bob4.display();
Bob5.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(Bob1.body,Bob2.body.position,{x:-75,y:-75})
	}
}