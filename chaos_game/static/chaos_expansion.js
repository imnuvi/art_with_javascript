var point_array;
var color_array;
var iter = 0;
var n = 4;
var rad = 300;
var perc = 0.5;
var preval = 0;
var neighbours = 1;
// var rot = (random(n));
var rot = 1;
var self_skipper = false;
var buffer = [];

let percentage_slider;
let count_slider;


function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

function self_rep(val){
  if (buffer[buffer.length-1]==buffer.length-2){
    return true
  }
  else{
    return false
  }
}
function skipper(places,val){
  if (self_skipper){
    if ((Math.abs(val-buffer[buffer.length-1])%(n-1))>places-1 || ((Math.abs(val-buffer[buffer.length-1])%(n-1))==0)){
      return false
    }
    else{
      return true
    }
  }
  else{
    if ((Math.abs(val-buffer[buffer.length-1])%(n-1))>places-1){
      return false
    }
    else{
      return true
    }
  }
}

function chooser(val){
  if ((buffer[buffer.length-1]==buffer[buffer.length-2]) && (Math.abs(val-buffer[buffer.length-1])%(n-1))==1){
    return false;
  }
  else{
    return true
  }

}

//this condition gives the randomness selection criteria to create cool patterns
function condition(preval,val){
  if (preval==val){
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

function resetsketch(){
  iter = 0;

}

window.addEventListener('resize', reportsize);
// percentage_slider.addEventListener('oninput',resetsketch);

function buffer_appender(){
  if (buffer.length > 3){
    buffer.shift();
    buffer.push(val);
  }
  else{
    buffer.push(val);
  }
}

function cycle(){
  reset_arrays();
  background(0);
  for(let i=0; i<20000; i++){
    val = Math.floor(random(n));
    stroke(color_array[val])
    if (skipper(2,val)){
      curpos.x = lerp(curpos.x,point_array[val].x,perc);
      curpos.y = lerp(curpos.y,point_array[val].y,perc);
      point(curpos.x,curpos.y);
      buffer_appender();
    }
  }
}


function set_sliders(){
  percentage_slider = createSlider(0.2,0.8,0.5,0.01);
  count_slider = createSlider(3,20,4,1);
}

function reset_arrays(){
  point_array = point_generator(n);
  color_array = color_generator(n);

}
function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  set_sliders();
}


function setup(){
  init()

  stroke(255);
  strokeWeight(1);
  background(0);
  curpos = createVector(random(ww),random(wh));                        // current random value for x, keeps changing
  cycle();
  percentage_slider.input(cycle);
  count_slider.input(cycle);
}

function draw(){
  perc = percentage_slider.value();
  n = count_slider.value();
  iter += 1;
  // if (iter < 100){
    // cycle();
  // }

  // triangle(ax,ay,bx,by,cx,cy);
  // circle(mouseX,mouseY,100);

}
