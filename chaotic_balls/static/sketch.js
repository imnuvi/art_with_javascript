
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
  ball = new bouncyBall(10, 'blue', 0.5);

  g = 9.8;
  tmax = 10;
  home_radius = 500;
  center = createVector(ww/2, wh/2);

}

function setup(){
  pixelDensity(2);
  init();
}

function draw(){
  // circle(mouseX,mouseY,100);
  ball.render();
  ball.update();
}
