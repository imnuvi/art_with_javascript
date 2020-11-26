int num = 5000, frms = 180, slices = 100;
float theta;
PGraphics pg;

void setup() {
  size(540, 540);
  gradient();
}

void draw() {
  background(34);//
  image(pg, 0, 0);
  fill(255);
  noStroke();
  translate(width/2, height/2);
  float d = 150;
  float s = map(sin(theta), -1, 1, -0.5, 1);
  float n =  9.15;
  float sz = 25;
  for (int i=0; i<num; i++) {
    float x = cos((TWO_PI*n*i)/num)*(.5-s*sq(cos((TWO_PI*18*i)/num)))*d;
    float y = sin((TWO_PI*n*i)/num)*(.5-s*sq(cos((TWO_PI*18*i)/num)))*d;
    float r = (1.0/200 + .1*pow(sin((32*TWO_PI*i)/num), 6))*sz;
    ellipse(x, y, r, r);
  }
  theta += TWO_PI/frms;
  if (frameCount<=frms) saveFrame("image-###.gif");
}

void gradient() {
  pg = createGraphics(width, height);
  pg.beginDraw();
  for (int i=0; i<slices; i++) {
    pg.noStroke();
    pg.fill(map(i, 0, slices, 0, 75));
    float sz = map(i, 0, slices, width*1.5, 5);
    pg.ellipse(width/2, height/2, sz, sz);
  }
  pg.endDraw();
}
