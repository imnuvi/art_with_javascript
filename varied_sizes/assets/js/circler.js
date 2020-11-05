function circleMover(x,y){
  this.xpos = x;
  this.ypos = y;
  this.size = min_size;
  this.grow_rate = grow_rate;
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
