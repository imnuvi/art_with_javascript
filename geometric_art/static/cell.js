function cell(xpos, ypos, width, height){
  this.xpos = xpos
  this.ypos = ypos
  this.size = width
  this.width = width
  this.height = height
  this.color = palette[Math.floor(Math.random() * palette.length)]
}

cell.prototype = {
  show: function(){
    fill(this.color)
    noStroke();
    // rect(this.xpos, this.ypos, this.width, this.height)
    opts = [ "render_circle", "render_triangle", "render_duality" ]
    orientation = Math.floor(Math.random() * 4)
    this[opts[Math.floor(Math.random() * opts.length)]](orientation)
  },
  render_circle: function(){
    circle(this.xpos+this.size/2, this.ypos+this.size/2, this.size)
  },
  render_triangle: function(orientation){
    // todo: make this function darn robust. works for now
    let vals;
    if (orientation == 0) {
      vals = [this.xpos, this.ypos, this.xpos+this.size, this.ypos, this.xpos, this.ypos+this.size]
    }
    else if (orientation == 1) {
      vals = [this.xpos, this.ypos, this.xpos+this.size, this.ypos, this.xpos+this.size, this.ypos+this.size]
    }
    else if (orientation == 2) {
      vals = [this.xpos+this.size, this.ypos, this.xpos+this.size, this.ypos+this.size, this.xpos, this.ypos+this.size]
    }
    else if (orientation == 3) {
      vals = [this.xpos, this.ypos, this.xpos+this.size, this.ypos+this.size, this.xpos, this.ypos+this.size]
    }
    triangle(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5])


  },
  render_duality: function(orientation){
    if (orientation == 0) {
      vals = [this.xpos, this.ypos, this.xpos+this.size/2, this.ypos, this.xpos, this.ypos+this.size/2]
    }
    else if (orientation == 1) {
      vals = [this.xpos+this.size/2, this.ypos, this.xpos+this.size, this.ypos, this.xpos+this.size, this.ypos+this.size/2]
    }
    else if (orientation == 2) {
      vals = [this.xpos+this.size, this.ypos+this.size/2, this.xpos+this.size, this.ypos+this.size, this.xpos+this.size/2, this.ypos+this.size]
    }
    else if (orientation == 3) {
      vals = [this.xpos, this.ypos+this.size/2, this.xpos+this.size/2, this.ypos+this.size, this.xpos, this.ypos+this.size]
    }
    circle(this.xpos+this.size/2, this.ypos+this.size/2, this.size)
    triangle(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5])
  },
  render_squarrow: function(orientation){

                   }
}
