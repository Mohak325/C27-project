class Roof {
    constructor(x,y){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,500,50,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("black");
        rect(this.body.position.x,this.body.position.y,500,50);
    }
}