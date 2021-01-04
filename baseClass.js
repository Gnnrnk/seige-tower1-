class Baseclass{
    constructor(x,y,width,height){
        var options={
        'restitution':0.03,
        'friction':1.0,
        'density':1.0,
        }

        this.box = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.box)
    }

display(){
var pos = this.box.position;
push()
strokeWeight(1.4);
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
pop()

}
  }