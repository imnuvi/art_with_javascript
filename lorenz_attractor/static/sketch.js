let x = 0;
let y = 0;
let z = 0;

// Prandtl number
let a = 1;
// Rayleigh number
let b = 1;
// parameters
let c = 1;



function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));  return thecol;
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  background(0);
}

function setup(){
  pixelDensity(2);
  init();
}

function draw(){

  dt = 0.001;
  dx = (a * ( y - x )) * dt;
  dy = (x * ( b - z ) - y) * dt;
  dz = (x * y - c * z ) * dt;

  stroke(255);
  // circle(mouseX,mouseY,100);
}
