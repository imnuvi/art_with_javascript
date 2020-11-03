var min_size = 10;
var max_size  = 300;
var grow_rate = 1;


var sphere_arr = [];


function setup(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh,WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw(){
  background(0);

  let dirx = (mouseX / width - 0.5) * 2;
  let diry = (mouseY / height - 0.5) * 2;

  directionalLight(250, 250, 250, -dirx, -diry, -0.5);

  noStroke();
  // fill(10);
  size = size + grow_rate;
  sphere(size);

  if (size>300 || size< 10){
    grow_rate *= -1;
  }

  // circle(mouseX,mouseY,100);
}
