class Chain{
    constructor(bodya,bodyb){
        var options={
            bodyA:bodya,
            bodyB:bodyb,
            stiffness:0.005,
            length:100
        
        
        
        }
        this.chain=constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
var posa=this.chain.bodyA.position
var posb=this.chain.bodyB.position
line(posa.x,posa.y,posb.x,posb.y)




    }
}
