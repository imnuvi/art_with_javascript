function Confetti(x,y){
  this.pos = createVector(x,y);
  this.width = 40;
  this.height = 40;
  this.rot = 90;
  // this.size = 20;
}

Confetti.prototype = {
  maxmin: function(val,dev,max,min){
    if (val >= max || val <= min){
      return false;
    }
    else{
      return true;
    }
  },

  update: function(){
    this.pos.y += gravity_value;
  },

  show: function(){
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.rot);
    rect(0,0,this.width,this.height);
    pop();
  }
}
