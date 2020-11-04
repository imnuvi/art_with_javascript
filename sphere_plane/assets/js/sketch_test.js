var min_size = 10;
var max_size  = 150;
var grow_rate = 1;

var plane_size = 3;


var sphere_arr;


function create_2d_array(x_len,y_len){
  arr = new Array(x_len);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(y_len);
  }
  return arr;
}


function fill_sphere_plane(arr){
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; i++){
      arr[i][j] = new sphereMover(i*max_size*2,j*max_size*2);
    }
  }
}


function setup(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh,WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  sphere_arr = create_2d_array(plane_size,plane_size);

}

function draw(){
  background(0);

  let dirx = (mouseX / width - 0.5) * 2;
  let diry = (mouseY / height - 0.5) * 2;

  directionalLight(250, 250, 250, -dirx, -diry, 1);

  noStroke();
  // fill(10);
  size = size + grow_rate;

  for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
      translate(i*max_size*2,j*max_size*2);

      sphere(size);

      translate(-i*max_size*2,-j*max_size*2);
    }
  }



  if (size>max_size || size< min_size){
    grow_rate *= -1;
  }

  // circle(mouseX,mouseY,100);
}
