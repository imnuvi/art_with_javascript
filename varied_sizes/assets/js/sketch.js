var min_size = 10;
var max_size  = 100;
var size = 10;
var grow_rate = 1;

var max_limit = 150;
var min_limit = 20;
// var generation_diff = 2;

var arr_length = 10;

var generation_diff = (max_size-min_size)/arr_length;
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
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      // genval = i*generation_diff;
      genval = (inv) ? map(arr.length - i,0,arr.length,min_size,max_size) : map(i,0,arr.length,min_size,max_size);
      // cursize = (genval  > max_size) ? (max_size - (genval )%max_size) : genval ;

      cursize = (genval %(max_size*2) > max_size ) ? (max_size*2 - genval %(max_size*2)) : (genval %(max_size*2));


      // inval = (genval  > max_size) ? (-1) : (1);
      inval = (genval  > max_size && Math.floor(genval /max_size)%2 == 0) ? (-1*grow_rate) : (1*grow_rate);
      arr[i][j] = new circleMover(in_size + (i)*max_size,in_size + (j)*max_size,cursize,inval,col);
    }
  }
  return arr;
}

function setup(){
  ww = windowWidth;
  wh = windowHeight;
  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  white_arr = create_2d_array(arr_length,arr_length);
  white_arr = fill_circle_arr(white_arr,'white',max_size*0,0);

  black_arr = create_2d_array(arr_length,arr_length);
  black_arr = fill_circle_arr(black_arr,'black',max_size*0.5,1);

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


  for (let i=0; i<white_arr.length; i++){
    for (let j=0; j<white_arr[0].length; j++){
      black_arr[i][j].increaser();
      black_arr[i][j].show();
    }
  }



  // circle(mouseX,mouseY,100);
}
