class chain{
constructor(bodyA,bodyB){
    var option= {
        bodyA:bird.body,
        bodyB:constrainedlog.body,
        stiffness:0.04,
        length:10
        
        }
       this. chain = Constraint.create(option);
        World.add(world,this.chain);
}

display(){
var pointA=this.chain.bodyA.position
var pointB=this.chain.bodyB.position
line (pointA.x,pointA.y,pointB.x,pointB.y)




}




}