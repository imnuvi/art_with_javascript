function Butterfly(xpos,ypos){
  this.pos = createVector(xpos,ypos);
  this.length = random(10,50);
  this.height = random(10,50);
}

Butterfly.prototype = {
  show: function(){
    circle(this.pos.x,this.pos.y,100);
  },

  update: function(){
    this.pos = this.pos.add(p5.Vector.random2D().mult(2));
  }
}
