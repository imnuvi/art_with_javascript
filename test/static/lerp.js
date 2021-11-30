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
      // for a circle the center and radius are enough to recreate it
      center = shape_obj.center;
      rad = shape_obj.radius;
    }
    else if (shape == 'square'){
      // for a square either a corner and length are required or top left and bottom right corners are required
      top_left_corner = shape_obj.top_left_corner;
      bottom_right_corner = shape_obj.bottom_right_corner;
      length = shape_obj.length;
    }
    else if (shape == 'triangle'){
      // for a triangle we need the three corners
      corner_1 = shape_obj.corner_1;
      corner_2 = shape_obj.corner_2;
      corner_3 = shape_obj.corner_3;
    }
  }
}
