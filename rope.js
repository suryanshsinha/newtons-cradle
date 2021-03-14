class Rope{
constructor(bodyA,bodyB,offsetx,offsety){
    this.offsetx=offsetx;
    this.offsety=offsety;
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetx,y:this.offsety}
    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope);
}

display(){
    var ropeAx=this.rope.bodyA.position.x+this.offsetx
var ropeAy=this.rope.bodyA.position.y+this.offsety
var ropeBx=this.rope.bodyB.position.x
var ropeBy=this.rope.bodyB.position.y
    line(ropeAx,ropeAy,ropeBx,ropeBy);
}
}
