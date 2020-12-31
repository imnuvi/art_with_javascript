function Confetti(x,y){
  this.pos = createVector(x,y);
  this.width = 40;
  this.height = 40;
  this.rot = 90;
  // this.size = 20;
}

Confetti.prototype = {
  update: function(){
    this.pos.y += 10;
  },

  show: function(){
    push();
    rect(this.pos.x,this.pos.y,this.width,this.height);
    pop();
  }
}
