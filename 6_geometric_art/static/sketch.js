let cells = [];
let minwidth = 50;
let square_size = minwidth;
let palette;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
  init();
}

window.addEventListener('resize', reportsize);



function create_2d_array(x_len,y_len){
  arr = new Array(x_len);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(y_len);
  }
  return arr;
}

function mousePressed(){
    renderscreen();
}

function set_palette(){
  palette = [random_color(), random_color(), random_color(), random_color()]
}

function resetscreen(){
  set_palette()

  for (let i=0; i<w_count; i++){
    for (let j=0; j<h_count;j++){
      size_opts = [square_size, square_size*2]
      size = size_opts[Math.floor(Math.random() * size_opts.length)]
      square_dev_x = i*square_size - Math.floor(Math.random())
      square_dev_y = j*square_size - Math.floor(Math.random())
      cells[i][j] = new cell(square_dev_x , square_dev_y,  size, size)
    }
  }
}

function renderscreen(){
  bg_color = random_color()
  resetscreen()


  background(bg_color);
  for (let i=0; i<cells.length; i++){
    for (let j=0; j<cells[0].length; j++){
      cells[i][j].show()
    }
  }
}

function init(){
  ww = windowWidth;
  wh = windowHeight;

  minwidth = 50;
  large = Math.max(ww,wh);
  if (large/20 < minwidth) {
    square_size = large/20
  }
  else {
    square_size = minwidth
  }
  w_count = Math.round(ww/square_size)
  h_count = Math.round(wh/square_size)

  cells = create_2d_array(w_count, h_count)


  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  noStroke();
  resetscreen();
  renderscreen();


}

function setup(){
  pixelDensity(2);
  init();
  noStroke();
}

function draw(){
  // background(bg_color)
  // circle(mouseX,mouseY,100);
}
