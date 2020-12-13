function circleMover(x,y,col){
  this.x = x;
  this.y = y;
  this.xpos = tot + x*circ_size;
  this.ypos = tot + y*circ_size;
  this.col = col;
  this.ang = 0;
  this.d = dist(this.xpos,this.ypos,arr_cent.x,arr_cent.y);
  // this.offset = 0.2*this.x;

  this.offset = map(this.d,0,maxd,-1,1);
}

circleMover.prototype.show = function(){
  push();
  translate(this.xpos,this.ypos);
  noStroke();
  fill(this.col);
  circle(0,0,this.size);
  pop();
}

circleMover.prototype.increaser = function(){
  this.size = map(sin(this.ang-this.offset),-1,1,10,circ_size);
  this.ang += speed;

}
