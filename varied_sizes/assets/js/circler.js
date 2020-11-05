function circleMover(x,y,cursize,inval,col){
  this.xpos = x;
  this.ypos = y;
  this.size = cursize;
  this.grow_rate = inval;
  this.col = col;
}

circleMover.prototype.show = function(){
  noStroke();
  fill(this.col);
  circle(this.xpos,this.ypos,this.size);
}

circleMover.prototype.increaser = function(){
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
