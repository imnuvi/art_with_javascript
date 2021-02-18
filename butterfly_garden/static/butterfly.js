function Butterfly(xpos,ypos){
  this.pos = createVector(xpos,ypos);
  this.size = random(5,100);
  this.length = random(-10,10);
  this.height = random(-5,5);
  this.color = random_color();
}

Butterfly.prototype = {
  show: function(){

    fill(this.color);
    circle(this.pos.x,this.pos.y,this.size);

    circle(this.pos.x+this.length,this.pos.y+this.height,this.size);
  },

  update: function(){
    this.pos = this.pos.add(p5.Vector.random2D().mult(2));
  }


}


function pattern(size){
  // this is a random pattern generator for the butterfly wings.

}
