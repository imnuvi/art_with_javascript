function cell(xpos, ypos, width, height){
  this.xpos = xpos
  this.ypos = ypos
  this.size = width
  this.width = width
  this.height = height
  this.color = palette[Math.floor(Math.random() * palette.length)]
  this.background_color = palette[Math.floor(Math.random() * palette.length)]
}

cell.prototype = {
  show: function(){
    //fill(this.background_color)
    noStroke();
    // rect(this.xpos, this.ypos, this.width, this.height)
    fill(this.color)
    noStroke();
    opts = [ "render_triangle", "render_duality" , "render_squarrow" ]
    orientation = Math.floor(Math.random() * 4)
    this[opts[Math.floor(Math.random() * opts.length)]](orientation)
    // this.render_circle()
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
    if (orientation == 0){
      locs = [this.helper_function(1),this.helper_function(5)]
      vals = [locs[0][0], locs[0][1], locs[1][0], locs[1][1]]
    }
    else if (orientation == 1){
      locs = [this.helper_function(2),this.helper_function(6)]
      vals = [locs[0][0], locs[0][1], locs[1][0], locs[1][1]]
    }
    else if (orientation == 2){
      locs = [this.helper_function(4),this.helper_function(8)]
      vals = [locs[0][0], locs[0][1], locs[1][0], locs[1][1]]
    }
    else if (orientation == 3){
      locs = [this.helper_function(5),this.helper_function(9)]
      vals = [locs[0][0], locs[0][1], locs[1][0], locs[1][1]]
    }
    rect(vals[0], vals[1], this.size/2, this.size/2)
  },
  helper_function: function(location_number){
    let location_map = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,1],[2,2],[2,3]]
    // given a keypad number (1-9) this function returns the respective x and y co ordinates for that location. eg: 1 - (0,0),  2 - (width/2, 0) , 8 - (width/2, height) and so on
    location_number = location_number - 1 // deviation for list index:w

    let unit = this.size/2
     let yloc = location_map[location_number][0]
     let xloc = location_map[location_number][1]
     let x_val = this.xpos +  unit * xloc 
     let y_val = this.ypos + unit * yloc 
    return [x_val, y_val]
  },
  skip_render: function(){
    
    }
}
