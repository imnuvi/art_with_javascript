function Star(){
  this.x = random(-ww/2,ww/2);
  this.y = random(-wh/2,wh/2);
  this.z = random(ww);
  this.size = map(this.z,0,ww,0,20);
}

Star.prototype.update = function(){
  this.z -= 10;
  if (this.z<=1){
    this.z = width;
    this.x = random(-ww/2,ww/2);
    this.y = random(-wh/2,wh/2);
  }
  // this.size = map(this.z,0,ww,0,20);
}

Star.prototype.show = function(){
  sx = map(this.x / this.z, 0, 1, 0, ww);
  sy = map(this.y / this.z, 0, 1, 0, wh);
  // this.size = map(this.z,0,ww,0,20);
  circle(sx, sy,8);
}
