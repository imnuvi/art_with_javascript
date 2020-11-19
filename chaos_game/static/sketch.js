var ax, ay;
var bx, by;
var cx, cy;
var n = 3;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

function point_generator(n){
  // n is the number of points required

  beginShape();
  for(let i=0; i<n; i++){
    vertex(random(ww),random(wh));
  }
  endShape(CLOSE);
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
  init()

  point_generator(n);
}

function draw(){
  // triangle(ax,ay,bx,by,cx,cy);
  circle(mouseX,mouseY,100);

}
