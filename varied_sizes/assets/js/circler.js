function circleMover(x,y,cursize,inval){
  this.xpos = x;
  this.ypos = y;
  this.size = cursize;
  this.grow_rate = inval;
}

circleMover.prototype.show = function(){
  circle(this.xpos,this.ypos,this.size);
}

circleMover.prototype.increaser = function(){
  if (this.size>max_size || this.size< min_size){
    this.grow_rate *= -1;
  }
  this.size = this.size + this.grow_rate;

}
