function Confetti(x,y){
  this.pos = createVector(x,y);
  this.max_width = random(20,40);
  this.max_height = random(20,40);
  this.rot = random(20,60);

  this.max_x_dev = random(30,60);
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
