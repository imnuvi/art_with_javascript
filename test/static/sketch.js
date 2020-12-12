
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
  init();
}

function draw(){
  circle(mouseX,mouseY,100);
  beginShape();
  vertex(100,100);
  vertex(100,200);
  vertex(200,200);
  vertex(200,100);

  endShape(CLOSE);
}

function myShape(){
  for (let i = 0; i<500; i++){
    
  }
}
