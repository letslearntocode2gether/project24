var en , wld, ground ;

function setup(){

	createCanvas(800,600);

en = Matter.Engine.create();
console.log(en);

wld  = en.world;

ground  = Matter.Bodies.rectangle(400,590,800,20,{isStatic: true});
Matter.World.add(wld, ground); 

console.log(ground);

leftSide = new Dustbin(500,525,20,110);
rightSide = new Dustbin(650,525,20,110);
downSide = new Dustbin(575,580,130,20);

paper  = new Paper(55,580,20);
console.log(paper);

}

function draw(){
	background(0);
	Matter.Engine.update(en);
	fill("brown");
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y, 800,20);

	leftSide.show();
	rightSide.show();
	downSide.show();

	paper.show();

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-65});
	}
}