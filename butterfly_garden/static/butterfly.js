function Butterfly(xpos,ypos){
  this.pos = createVector(xpos,ypos);
}

Butterfly.prototype = {
  show: function(){
    circle(this.pos.x,this.pos.y,100);
  },

  update: function(){
    this.pos = this.pos.add(p5.Vector.random2D().mult(2));
  }
}
