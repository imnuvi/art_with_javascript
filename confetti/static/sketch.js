let gravity_value = 5;

let confetti_array = [];

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}


function init(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);

  for(let i=0; i<30; i++){
    confetti_array.push(new Confetti(random(ww),random(-500,0)));
  }
}

function setup(){
  pixelDensity(2);
  angleMode(DEGREES);
  init();
  // conf = new Confetti(ww/2,0);
}

function draw(){
  background(0);
  // circle(mouseX,mouseY,100);
  for (conf of confetti_array){
    if (conf.alive){
      conf.update();
      conf.show();
    }
    else{
      ind = confetti_array.indexOf(conf);
      confetti_array.splice(ind,1);
    }
  }

  if (confetti_array.length < 100){
    for (let i=0; i<10; i++){
      confetti_array.push(new Confetti(random(ww),0))
    }
  }
  // console.log(confetti_array);
}
