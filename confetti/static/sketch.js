let gravity_value = 5;

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
  angleMode(DEGREES);
  init();
  conf = new Confetti(ww/2,0);
}

function draw(){
  background(0);
  // circle(mouseX,mouseY,100);
  conf.update();
  conf.show();
}
