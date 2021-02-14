function Butterfly(xpos,ypos){
  this.pos = createVector(xpos,ypos);
  this.size = random(0,100);
  this.length = random(5,10);
  this.height = random(0,5);
}

Butterfly.prototype = {
  show: function(){
    circle(this.pos.x,this.pos.y,this.size);
    circle(this.pos.x+this.length,this.pos.y+this.length,this.size);
  },

  update: function(){
    this.pos = this.pos.add(p5.Vector.random2D().mult(2));
  }


}
