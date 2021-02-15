let butterfly_list = [];

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
}

window.addEventListener('resize', reportsize);


function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  background(10,10,10);
  for (let i=0; i<100; i++){
    butterfly_list.push(new Butterfly(random(0,ww),random(0,wh)))
  }
}

function setup(){
  pixelDensity(2);
  init();
  noStroke();
}

function draw(){
  for (let i=0; i<butterfly_list.length; i++){
    // butterfly_list[i].update();
    butterfly_list[i].show();
  }
  // circle(mouseX,mouseY,100);
}
