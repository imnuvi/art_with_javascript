function Confetti(x,y){
  this.pos = createVector(x,y);
  this.max_width = random(20,40);
  this.max_height = random(20,40);
  this.max_rot = random(20,60);
  this.max_x_dev = random(30,60);

  this.width_vel = 2;
  this.height_vel = 2;
  this.rot_vel = 1;
  this.x_vel = 1;

  this.width = random(20,40);
  this.height = random(20,40);
  this.rot = random(20,60);
  // this.max_x_dev = random(30,60);
  // this.size = 20;
}

Confetti.prototype = {
  maxmin: function(val,dev,max,min){
    if ((val+dev) >= max || (val-dev) <= min){
      return true;
    }
    else{
      return false;
    }
  },

  update: function(){
    this.pos.y += gravity_value;
    this.width += maxmin(this.width,this.width_vel,-this.max_width,this.max_width) ? this.width_vel * (-1) : 1;
    this.height += maxmin(this.height,this.height_vel,-this.max_height,this.max_height) ? this.height_vel * (-1) : 1;
    this.rot += maxmin(this.rot,this.rot_vel,-this.max_rot,this.max_rot) ? this.rot_vel * (-1) : 1;
    this.pos.x += maxmin(this.pos.x,this.x_vel,-this.max_x_dev,this.max_x_dev) ? this.x_vel * (-1) : 1;
  },

  show: function(){
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.rot);
    rect(0,0,this.width,this.height);
    pop();
  }
}
