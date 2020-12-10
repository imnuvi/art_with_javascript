var num = 500;
var frms = 180;
var theta;

function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(600,600);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  smooth(8);
}

function setup(){
  init();
}

function draw(){
  background(238);
  translate(ww/2,wh/2);
  myShape(1, 34, 1, 9,0);
  myShape(0, 238, -1, 9,10);

  theta += TWO_PI/frms;
  // circle(mouseX,mouseY,100);
}

function myShape(s,f,dir,n,v){
  if (s==0){
    noStroke();
  }
  else{
    stroke(34);
  }

  fill(0);
  beginShape();
  for (let i = 0; i<num; i++){
    angle = 2*Math.PI/num*i;
    minV = map(sin(dir*theta+dir*angle*3), -1, 1, 15, 150);
    d = map(sin(angle*n), -1, 1, minV, 220+v);
    x = cos(angle)*d;
    y = sin(angle)*d;
    vertex(x, y);
  }
  endShape(CLOSE);
}
