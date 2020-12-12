function rectMover(x,y,cursize,inval,col){
  this.xpos = x;
  this.ypos = y;
  this.size = cursize;
  this.grow_rate = inval;
  this.col = col;
  rectMode(CENTER);
}

rectMover.prototype.show = function(){
  push();
  translate(this.xpos,this.ypos);
  rotate(45);
  noStroke();
  fill(this.col);
  rect(0,0,this.size,this.size,this.size/6);
  rotate(-45);
  pop();
}

rectMover.prototype.increaser = function(){

    if (this.size+this.grow_rate <= min_limit){
      this.size = min_limit;
      this.grow_rate *= -1;
    }
    else if (this.size+this.grow_rate >= max_limit){
      this.size = max_limit;
      this.grow_rate *= -1;
    }
    this.size = this.size + this.grow_rate;

}
