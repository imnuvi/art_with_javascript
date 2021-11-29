// this function performs linear interpolation between two shapes.

// idea is to create a generic function that does this for all shapes.
function shape(x1, y1, x2, y2){
    
}

let n = 100;

// this function will generate a list of points for any shape given
function points_generator(shape_obj){
  if (shape_obj){
    shape = shape_obj.shape;
    if (shape == 'circle'){
      center = shape_obj.center;
      rad = shape_obj.radius;
    }
  }
}
