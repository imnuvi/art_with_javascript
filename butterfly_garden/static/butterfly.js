function Butterfly(xpos,ypos){
  this.pos = createVector(xpos,ypos);
}

Butterfly.prototype.show = function(){
  circle(this.pos.x,this.pos.y,100);
}
