let bubs = [];
let palette;
let minsize = 20;

let tot_diff = 300;

let maxdiff = 150;
let maxlen = 300;
let cen_x;
let cen_y;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
  init();
}

window.addEventListener('resize', reportsize);


function mousePressed(){
  resetscreen()
}

function set_palette(){
  palette = [random_color(), random_color(), random_color(), random_color()]
}

function resetscreen(){
  set_palette()

  bubs = []
  for (let i=0; i<1500; i++){
    xpos = random(ww)
    ypos = random(wh)
    size = random(20)
    bubs.push(new bubble(xpos,ypos,size))
  }
}

function renderscreen(){
  background(bg_color);
  for (let i=0; i<bubs.length; i++){
    bubs[i].update()
    bubs[i].show()
  }
}

function init(){
  ww = windowWidth;
  wh = windowHeight;

  cen_x = ww/2
  cen_y = wh/2

  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  resetscreen()


  bg_color = (10,10,10)

  noStroke();


}

function setup(){
  pixelDensity(2);
  init();
  noStroke();
}

function draw(){
  renderscreen();
  // background(bg_color)
  // circle(mouseX,mouseY,100);
}
