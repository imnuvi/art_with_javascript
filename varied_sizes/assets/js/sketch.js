var min_size = 10;
var max_size  = 100;
var size = 10;


var space_dist = 150;
var max_limit = 100;
var min_limit = 10;
// var generation_diff = 2;

var arr_length = 11;
var grow_rate = (max_limit-min_limit)/arr_length/6;

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

function fill_circle_arr(arr,col,in_size,inv){
  var loc_mid = createVector(Math.floor(arr.length/2),Math.floor(arr[0].length/2));
  corner_dist = dist(loc_mid.x,loc_mid.y,0,0);

  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      // genval = i*generation_diff;

      // genval = (inv) ? map(arr.length*2 - i*j -1,0,arr.length,min_limit,max_limit,true) : map(j*i,0,arr.length,min_limit,max_limit,true);
      cur_dis = dist(loc_mid.x,loc_mid.y,i,j);
      genval = map(cur_dis,0.0,corner_dist/2,min_limit,max_limit);

      // cursize = (genval  > max_size) ? (max_size - (genval )%max_size) : genval ;

      // cursize = (genval %(max_size*2) > max_size ) ? (max_size*2 - genval %(max_size*2)) : (genval %(max_size*2));


      // inval = (genval  > max_size) ? (-1) : (1);
      // inval = (genval  > max_size && Math.floor(genval /max_size)%2 == 0) ? (-1*grow_rate) : (1*grow_rate);
      inval = grow_rate;
      arr[i][j] = new rectMover(in_size + (i)*space_dist,in_size + (j)*space_dist,genval,inval,col);
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

  white_arr = create_2d_array(arr_length,arr_length);
  white_arr = fill_circle_arr(white_arr,'white',max_size*1,0);

  black_arr = create_2d_array(arr_length,arr_length);
  black_arr = fill_circle_arr(black_arr,'black',max_size*0.5,1);

  angleMode(DEGREES);


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
  //
  //
  // for (let i=0; i<white_arr.length; i++){
  //   for (let j=0; j<white_arr[0].length; j++){
  //     black_arr[i][j].increaser();
  //     black_arr[i][j].show();
  //   }
  // }



  // circle(mouseX,mouseY,100);
}
