var min_size = 10;
var max_size  = 150;
var size = 10;
var grow_rate = 1;

var arr_length = 20;

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
      arr[i][j] = new circleMover(i*max_size,j*max_size);
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
