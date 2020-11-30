
function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	// resizeCanvas(windowWidth,windowHeight);
  init();
}

window.addEventListener('resize', reportsize);


function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
}

function setup(){
  rectMode(CENTER);
  init();
  background(0);
}

function draw(){
  blo = new block(random(ww),random(wh));
  blo.show();
  // circle(mouseX,mouseY,100);
}
