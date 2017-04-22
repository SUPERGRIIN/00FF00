int cols, rows;
int scl = 20;
int w = 480;
int h = 320;

float flying = 0;

float[][] terrain;

float seed = 0;

void setup() {
    size(innerWidth-15,innerHeight-15, P3D);
    noCursor();
    cols = w / scl;
    rows = h/ scl;
    terrain = new float[cols][rows];
    //frameRate(10);
    smooth(10);
}


void draw() {

    flying -=0.01;

    float yoff = flying;
    for (int y = 0; y < rows; y++) {
      float xoff = 0;
      for (int x = 0; x < cols; x++) {
        //terrain[x][y] = map(noise(xoff, yoff), 0, 1, -40, 40);
        xoff += 0.5;
    }
yoff += 0.5;
}



background(255);
stroke(0, 255, 0);
noFill();

translate(width/2, height/2);
rotateX((seed)/200);
//rotateY((seed));
translate(-w/2, -h/2);
for (int y = 0; y < rows-1; y++) {
beginShape(QUAD_STRIP);
for (int x = 0; x < cols; x++) {
  vertex(y*scl, y*scl, terrain[x][y]);
  vertex(y*scl, (y+1)*scl, terrain[x][y+1]);
  rect(x*scl, y*scl, scl, scl);
  seed += 0.01;
}
endShape();
}
}