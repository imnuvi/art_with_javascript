let the_shape;



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
  the_shape = {
    shape: 'circle',
    center: createVector(0,0),
    radisu: 100
  }
}

function setup(){
  init();
}

function draw(){
  points_generator(the_shape);
}

function myShape(){
}
