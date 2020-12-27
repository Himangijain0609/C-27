class Chain{
    constructor(bodyA,bodyB){
        var props={
            //our bodyA is bird's body
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            length: 10
        }
    
        this.chain = Constraint.create(props);
        World.add(world,this.chain);
   
    }

    display(){
        
     var posA = this.chain.bodyA.position
     var posB = this.chain.bodyB.position
     push()
        strokeWeight(5);
    line(posA.x,posA.y,posB.x,posB.y,);
      pop()
    }
}