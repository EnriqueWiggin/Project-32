class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
 this.Visibilty = 225;
  }
display() {
if(this.body.speed<3) {
  super.display()

}
else {
  World.remove(world,this.body)
  push()
  this.Visibilty = this.Visibilty -5
  pop()
}
}
score(){
  console.log("hi i am here")
  console.log(this.Visibilty)
  if (this.Visibilty < 0 && this.Visibilty > -1005){
    score++;
  }
}
}
