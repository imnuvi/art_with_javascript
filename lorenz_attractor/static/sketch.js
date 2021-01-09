let x = 0;
let y = 0;
let z = 0;

let a = 0;
let b = 0;
let c = 0;





function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
}

function setup(){
  pixelDensity(2);
  init();
}

function draw(){
  circle(mouseX,mouseY,100);
}
