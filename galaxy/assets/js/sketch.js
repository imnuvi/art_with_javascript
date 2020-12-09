let star_list = [];
let count = 200;
var speed

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

  for (let i=0; i<count; i++){
	  star_list.push(new Star);
  }
}

function draw(){
		translate(ww/2,wh/2);
		background(0);
		angleMode(DEGREES);
		speed = map(mouseX,0,ww,0.2,50);
		rotation = map(mouseY,0,wh,0,50*PI);
		rotate(rotation);
	  for (let i=0; i<count; i++){
			star_list[i].update();
		  star_list[i].show();
	  }
}
