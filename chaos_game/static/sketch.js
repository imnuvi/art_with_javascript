var ax, ay;
var bx, by;
var cx, cy;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}


// function reportsize(){
// 	resizeCanvas(windowWidth,windowHeight);
// 	init();
// }


window.addEventListener('resize', reportsize);


function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
}

function setup(){
  init()
  // ax = ww/2-ww/4;             //static values for perfect triangle
  // ay = wh/2+wh/4;
  // bx = ww/2+ww/4;
  // by = wh/2+wh/4;
  // cx = ww/2;
  // cy = wh/2-wh/4;

  ax = random(ww);
  ay = random(wh);
  bx = random(ww);
  by = random(wh);
  cx = random(ww);
  cy = random(wh);
}

function draw(){
  triangle(ax,ay,bx,by,cx,cy);
  circle(mouseX,mouseY,100);
}
