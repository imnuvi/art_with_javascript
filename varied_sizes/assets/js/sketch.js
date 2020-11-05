var min_size = 10;
var max_size  = 100;
var size = 10;
var grow_rate = 1;
// var generation_diff = 2;

var arr_length = 30;

var generation_diff = (max_size-min_size)/arr_length;
var dot_arr;


function create_2d_array(x_len,y_len){
  arr = new Array(x_len);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(y_len);
  }
  return arr;
}

function fill_circle_arr(arr){
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      // genval = i*generation_diff;
      genval = map(i,0,arr.length,min_size,max_size);
      // cursize = (genval  > max_size) ? (max_size - (genval )%max_size) : genval ;

      cursize = (genval %(max_size*2) > max_size ) ? (max_size*2 - genval %(max_size*2)) : (genval %(max_size*2));


      // inval = (genval  > max_size) ? (-1) : (1);
      inval = (genval  > max_size && Math.floor(genval /max_size)%2 == 0) ? (-1*grow_rate) : (1*grow_rate);
      arr[i][j] = new circleMover(i*max_size,j*max_size,cursize,inval);
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

  dot_arr = create_2d_array(arr_length,arr_length);
  dot_arr = fill_circle_arr(dot_arr);

}

function draw(){
  background(0);


  noStroke();
  // fill(10);

  for (let i=0; i<dot_arr.length; i++){
    for (let j=0; j<dot_arr[0].length; j++){
      dot_arr[i][j].increaser();
      dot_arr[i][j].show();
    }
  }




  // circle(mouseX,mouseY,100);
}
