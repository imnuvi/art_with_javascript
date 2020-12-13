function Star(){
  this.x = random(-ww/2,ww/2);
  this.y = random(-wh,wh);
  this.z = random(ww);
  this.size = map(this.z,0,ww,20,0);
  this.col = random_color();
}

Star.prototype.update = function(){
  this.z -= speed;
  if (this.z<=1){
    this.z = ww;
    this.x = random(-ww/2,ww/2);
    this.y = random(-wh,wh);
  }
  else if (this.z>ww){
      this.z = 0;
      this.x = random(-ww/2,ww/2);
      this.y = random(-wh,wh);
  }
  // this.size = map(this.z,0,ww,0,20);
}

Star.prototype.show = function(){
  noStroke();
  fill(this.col);
  sx = map(this.x / this.z, 0, 1, 0, ww);
  sy = map(this.y / this.z, 0, 1, 0, wh);
  this.size = map(this.z,0,ww,20,0);
  circle(sx, sy, this.size);
}
