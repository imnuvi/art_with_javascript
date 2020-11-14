


function random_position(){
	return [random(0,ww),random(0,wh)];
}

function setup(){
	ww = windowWidth;
	wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
	background(0);

  for (let i=0; i<40; i++){
	  circle(random_position()[0],random_position()[1],random(0,20));
  }
}

function draw(){

}
