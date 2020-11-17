class Ball{
constructor(x,y,radius){
var options={
restitiution:0.3,friction:0.5,density:1.2

}
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
this.radius=radius
}
display(){
circle(this.body.position.x,this.body.position.y,this.radius*2)

}
}