function cell(xpos, ypos, width, height){
  this.xpos = xpos
  this.ypos = ypos
  this.size = width
  this.width = width
  this.height = height
  this.color = random_color()
}

cell.prototype = {
  show: function(){
    fill(this.color)
    // rect(this.xpos, this.ypos, this.width, this.height)
    opts = ["render_circle", "render_triangle"]
    this[opts[Math.floor(Math.random() * opts.length)]]()
  },
  render_circle: function(){
    circle(this.xpos+this.size/2, this.ypos+this.size/2, this.size)
  },
  render_triangle: function(orientation){
    // todo: make this function darn robust. works for now

    // if
    triangle(this.xpos, this.ypos+this.size, this.xpos+this.size, this.ypos, this.xpos+this.size, this.ypos+this.size)
  },
  render_duality: function(){

  }
}
