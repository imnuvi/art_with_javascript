let x = 10;
let y = 0;
let z = 0;

// Prandtl number
let a = 10;
// Rayleigh number
let b = 28;
// parameters
let c = 8/3;



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

  dt = 0.01;
  dx = (a * ( y - x )) * dt;
  dy = (x * ( b - z ) - y) * dt;
  dz = (x * y - c * z ) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;
  stroke(255);
  translate(ww/2,wh/2);
  console.log(x, y);
  point(x*10,y*10);
  // circle(mouseX,mouseY,100);
}
