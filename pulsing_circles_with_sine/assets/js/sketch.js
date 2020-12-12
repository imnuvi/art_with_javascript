var the_shape = "circle";


var space_dist = 110;
var circ_size = 100;
var padding = 0;
var tot = circ_size + padding;

var speed = 0.1;

var arr_length = 7;
var arr_cent;
var maxd;




// var generation_diff = (max_size-min_size)/arr_length;
var white_arr;
var black_arr;


function create_2d_array(x_len,y_len){
  arr = new Array(x_len);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(y_len);
  }
  return arr;
}

function fill_circle_arr(arr,col){
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      arr[i][j] = new circleMover(i, j,col);
    }
  }
  return arr;
}

function setup(){
  ww = windowWidth;
  wh = windowHeight;

  frameRate(30);

  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  arr_cent = createVector(tot/2 + (arr_length/2)*circ_size,tot/2 + (arr_length/2)*circ_size);

  maxd = dist(tot,tot,arr_cent.x,arr_cent.y);

  white_arr = create_2d_array(arr_length,arr_length);
  white_arr = fill_circle_arr(white_arr,'white');

  black_arr = create_2d_array(arr_length,arr_length);
  black_arr = fill_circle_arr(black_arr,'black');

  angleMode(RADIANS);


}

function draw(){
  background(0);


  noStroke();
  // fill(10);

  for (let i=0; i<white_arr.length; i++){
    for (let j=0; j<white_arr[0].length; j++){
      white_arr[i][j].increaser();
      white_arr[i][j].show();
    }
  }
}
