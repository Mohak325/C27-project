class String {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.8,
            length : 100
        }
        this.string = Matter.Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("blue");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}