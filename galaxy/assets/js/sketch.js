

function setup(){
  canvas = createCanvas(500,500);
  img = loadImage("./images/bg.png")
}

function draw(){
  circle(mouseX,mouseY,100);
  image(img,0,0);
}
