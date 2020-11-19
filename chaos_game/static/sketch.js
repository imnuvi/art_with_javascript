var point_array;
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
  point_arr = [];
  beginShape();
  for(let i=0; i<n; i++){
    xx = random(ww);
    yy = random(wh);
    point_arr.push(xx,yy);
    vertex(random(ww),random(wh));
  }
  endShape(CLOSE);
  return point_arr;
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

  point_array = point_generator(n);
}

function draw(){
  // triangle(ax,ay,bx,by,cx,cy);
  // circle(mouseX,mouseY,100);

}
