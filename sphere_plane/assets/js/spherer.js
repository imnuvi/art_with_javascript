function sphereMover(x,y){
  this.xpos = x;
  this.ypos = y;
  this.size = cursize;
  this.grow_rate = inval;
  this.col = col;
}

circleMover.prototype.show = function(){
  push();
  translate(this.xpos,this.ypos);
  noStroke();
  fill(this.col);
  sphere(0,0,this.size);
  pop();
}

circleMover.prototype.increaser = function(){

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
