class Dustbin {

    constructor(x,y,w,h){
       
       this.body =  Matter.Bodies.rectangle(x,y,w,h,{isStatic: true});
       Matter.World.add(wld, this.body); 
       this.width = w;
       this.height  = h;

    }

    show(){

        push();
        fill("green");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.width, this.height)
        pop();
    }

}