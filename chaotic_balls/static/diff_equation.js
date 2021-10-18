g = 9.8;
tmax = 10;
radius = 100;
center = createVector(ww/2, wh/2);


export function displace(x, y, displacement){
  new_x = x + displacement.x
  new_y = y + displacement.y
  new = createVector(new_x, new_y)
  if (new_x - center.x)**2 + (new_y - center.y)**2 >= radius{
    print(yeah)
  }
  return new
}

function SolveSystem(x0, y0){
  y_dd = g;
  x_dd = 0;
  x_d = 0;
  y_d = 0;
}
