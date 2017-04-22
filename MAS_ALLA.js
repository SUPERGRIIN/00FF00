float x = 10000, dx = -20, ddx = 0;
float y = 10000, dy = -20, ddy = 0;
float z = 20;
int qx, qy;
float h = PI + QUARTER_PI, v = 0;
final float angleUnit = TAU / 128;


void setup() {
    size(innerWidth-15,innerHeight-15, P3D);
    perspective(PI/3, float(width)/height, 1, 900);
    frameRate(16);
    noCursor();
    strokeWeight(0.3);
    stroke(0,255,0);
}



void draw() {
    ddx = cos(h);
    ddy = sin(h);
    v = constrain(v, -0.4, 0.4);
    dx = dx*0.9 + ddx;
    dy = dy*0.9 + ddy;
    x += dx;
    y += dy;
    camera(x, y, z,    x + cos(h)*cos(v), y + sin(h)*cos(v), z + sin(v),    0, 0, -1);
    qx = int(x/900) * 900 - 900;
    qy = int(y/900) * 900 - 900;
    translate(qx, qy);
    background(255);
    fill(0);
    stroke(0,255,0);
    for (int l = 0; l < 2700; l+=20) {
      line(0, l, 2700, l);
      line(l, 0, l, 2700);
    }
}