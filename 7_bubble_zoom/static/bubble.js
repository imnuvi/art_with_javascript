function bubble(xpos, ypos, width, height){
  this.xpos = xpos
  this.ypos = ypos
  this.size = 3
  this.diff = 0
  this.color = palette[Math.floor(Math.random() * palette.length)]
}

bubble.prototype = {
  show: function(){
    fill(this.color)
    noStroke();
    circle(this.xpos, this.ypos, this.size)
  },
  update: function(){
    mouse_xdiff = Math.abs(mouseX - this.xpos)
    mouse_ydiff = Math.abs(mouseY - this.ypos)
    the_dist = dist(mouseX, mouseY, this.xpos, this.ypos)
    if (the_dist<maxlen) {
      this.size = this.grav(the_dist)
    }
    else{
      this.size = 3
    }
  },
  grav: function(){
    // force = Math.min(((this.size * this.size) / (the_dist)), maxdiff)
    // perc = (maxlen-the_dist)/maxlen
    return maxlen-the_dist
    // return force
    console.log(force)
  }
}
