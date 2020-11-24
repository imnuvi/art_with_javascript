var point_array;
var color_array
var n = 4;
var rad = 300;
var perc = 0.5;
var preval = 0;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

function skipper(places,preval,val){
  if (Math.abs(val-preval)>places-1){
    return false
  }
  else{
    return true
  }

}

//this condition gives the randomness selection criteria to create cool patterns
function condition(preval,val){
  if ((preval+val)%n==val){
    return 0
  }
  else{
    return 1
  }
}

function color_generator(n){
  col_arr = [];
  for(let i=0; i<n; i++){
    col_arr.push(color(random(255),random(255),random(255)));
  }
  return col_arr;
}

function point_generator(n){
  // n is the number of points required
  point_arr = [];
  noFill();
  beginShape();
  rot = random(20);
  for(let i=0; i<n; i++){
    console.log(rot);
    ang = i * (Math.PI*2 /n) + (Math.PI/rot) ;
    corner = p5.Vector.fromAngle(ang);
    point_arr.push(corner);
    corner.mult(rad);
    corner.add(ww/2,wh/2);
    vertex(corner.x,corner.y);
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
  strokeWeight(1);
  background(0);
  point_array = point_generator(n);
  color_array = color_generator(n);
  curpos = createVector(random(ww),random(wh));                        // current random value for x, keeps changing
}

function draw(){

  for(let i=0; i<100; i++){
    val = Math.floor(random(n));
    stroke(color_array[val])
    if (skipper(2,preval,val)){
    curpos.x = lerp(curpos.x,point_array[val].x,perc);
    curpos.y = lerp(curpos.y,point_array[val].y,perc);
  }

    point(curpos.x,curpos.y);
    preval = val;
  }
  // triangle(ax,ay,bx,by,cx,cy);
  // circle(mouseX,mouseY,100);

}
