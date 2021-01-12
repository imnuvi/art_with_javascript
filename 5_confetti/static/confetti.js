function Confetti(x,y){
  this.alive = true;
  this.pos = createVector(x,y);

  this.color = random_color();
  this.grav = random(2,gravity_value);

  this.max_width = random(10,30);
  this.max_height = random(10,20);
  this.max_rot = random(20,30);
  this.max_x_dev = random(90,300);


  this.width_vel = random(0.5,4);
  this.height_vel = random(0.1,4);
  this.rot_vel = random(0.1,1);
  this.x_vel = random(0.1,5);

  this.x_moved = 0;
  this.width = random(-this.max_width,this.max_width);
  this.height = random(-this.max_height,this.max_height);
  this.rot = random(0,this.max_rot);
}

Confetti.prototype = {
  maxmin: function(val,dev,min,max){
    if ((val) > max || (val) < min){
      return true;
    }
    else{
      return false;
    }
  },

  update: function(){
    this.pos.y += this.grav;
    this.width_vel = this.maxmin(this.width,this.width_vel,-this.max_width,this.max_width) ? this.width_vel * (-1) : this.width_vel;
    this.height_vel = this.maxmin(this.height,this.height_vel,-this.max_height,this.max_height) ? this.height_vel * (-1) : this.height_vel;
    this.rot_vel = this.maxmin(this.rot,this.rot_vel,-this.max_rot,this.max_rot) ? this.rot_vel * (-1) : this.rot_vel;
    this.x_vel = this.maxmin(this.x_moved,this.x_vel,-this.max_x_dev,this.max_x_dev) ? this.x_vel * (-1) : this.x_vel;

    this.width += this.width_vel;
    this.height += this.height_vel;
    this.rot += this.rot_vel;
    this.pos.x += this.x_vel;
    this.x_moved += this.x_vel;


    if (this.pos.y > wh){
      this.alive = false;
    }
  },

  show: function(){
    fill(this.color);
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.rot);
    rect(0,0,this.width,this.height);
    pop();
  }
}
