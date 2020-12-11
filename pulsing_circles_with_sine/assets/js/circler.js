function circleMover(x,y,col){
  this.xpos = x;
  this.ypos = y;
  this.col = col;
  this.size = 10;
  this.ang = 0;
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
  this.size = map(sin(this.ang),-1,1,10,circ_size);
  this.ang += speed;

}
