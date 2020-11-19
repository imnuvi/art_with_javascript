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
  noFill();
  beginShape();
  for(let i=0; i<n; i++){
    xx = random(ww);
    yy = random(wh);
    point_arr.push(xx,yy);
    vertex(xx,yy);
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

  stroke(255);
  strokeWeight(5);
  background(0);
  point_array = point_generator(n);
  curx = random(ww);                        // current random value for x, keeps changing
  cury = random(wh);
}

function draw(){

  val = Math.floor(random(n));
  console.log(val);
  curx = lerp(curx,point_array[val*2],0.5);
  cury = lerp(cury,point_array[val*2 + 1],0.5);

  point(curx,cury);
  // triangle(ax,ay,bx,by,cx,cy);
  // circle(mouseX,mouseY,100);

}
