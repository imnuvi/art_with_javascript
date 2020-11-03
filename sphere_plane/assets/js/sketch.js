

function setup(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh,WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw(){
  background(0);

  let dirx = (mouseX / width - 0.5) * 2;
  let diry = (mouseY / height - 0.5) * 2;

  directionalLight(250, 250, 250, -dirx, -diry, 0);

  noStroke();
  // fill(10);
  sphere(300);
  // pop();
  // circle(mouseX,mouseY,100);
}
