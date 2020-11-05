function rectMover(x,y,cursize,inval,col){
  this.xpos = x;
  this.ypos = y;
  this.size = cursize;
  this.grow_rate = inval;
  this.col = col;
  rectMode(RADIUS);
}

rectMover.prototype.show = function(){
  push();
  translate(this.xpos,this.ypos);
  rotate(45);
  noStroke();
  fill(this.col);
  rect(0,0,this.size);
  rotate(-45);
  pop();
}

rectMover.prototype.increaser = function(){
  if (this.size > max_limit || this.size < min_limit){
    if (this.size <= min_limit-grow_rate){
      this.grow_rate = 1;
    }
    else if (this.size >= max_limit+grow_rate){
      this.grow_rate = -1;
    }
    else{
      this.grow_rate *= -1;
    }
  }
  this.size = this.size + this.grow_rate;

}
