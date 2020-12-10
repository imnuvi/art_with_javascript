let star_list = [];
let count = 100;
var speed

function random_color(){
  thecol = color(random(0,255),random(190,255),random(200,255));
  return thecol;
}


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
		speed = map(mouseX,0,ww,-50,50);
		rotation = map(mouseY,0,wh,0,50*PI);
		rotate(rotation);
	  for (let i=0; i<count; i++){
			star_list[i].update();
		  star_list[i].show();
	  }
}
