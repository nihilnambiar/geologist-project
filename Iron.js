class Iron {
   constructor(x,y,height,angle){
     var options={
'restitution':0.8,
'friction':3,
'density':30
 }
 this.body = bodies.rectangle(x,y,20,height,options);
 this.width=20;
 this.height=height;
 Matter.Body.setAngle(this.body,angle);
 World.add(world,this.body);
} 
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    srokeWeight(4);
    stroke("green")
    fill(250);
    rect(0,0,this.width,this.height);
    pop();
}
}

  