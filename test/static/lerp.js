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

      angle_diff = 360/n;
      for (let i=0; i<n; i++){
        new_angle = i*angle_diff;
        relative_point = p5.Vector.fromAngle(radians(new_angle));
        actual_point = center + relative_point;
      }
    }
    else if (shape == 'square'){
      // for a square either a corner and length are required or top left and bottom right corners are required
      let top_left_corner = shape_obj.top_left_corner;
      let bottom_right_corner = shape_obj.bottom_right_corner;
      let length = shape_obj.length;
      let top_right_corner = createVector(top_left_corner.x + length, top_left_corner.y);
      let bottom_left_corner = createVector(top_left_corner.x, top_left_corner.y + length);
      let points_per_side = round(n/4);
      // a single segment is side length / points per side
      let segment_length = length / points_per_side;
      // for each squere there are four sides and n/4 points
      let line_splitter = function(point1, point2){
        kl
      }
      for (let i=0;, i<4; i++){
        for (let j=0;, j<points_per_side; j++){

          
        }
      }
    }
    else if (shape == 'triangle'){
      // for a triangle we need the three corners
      corner_1 = shape_obj.corner_1;
      corner_2 = shape_obj.corner_2;
      corner_3 = shape_obj.corner_3;
    }
  }
}
