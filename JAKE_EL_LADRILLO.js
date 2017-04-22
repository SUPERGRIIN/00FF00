float ang;
void setup() {
    size(innerWidth-15,innerHeight-15, P3D);
    background(255);
    noCursor();
    ortho(-width, width, -height, height, -1000, 1000);
    noFill();
}

void draw() {
  
    background(255);
    translate(width/2, height/2, 200);
  
    rotateX(radians(ang));
    stroke(255,0,0,150);
    box(120, 240, 480);
  
    rotateY(radians(ang));
    stroke(0,255,0);
    box(120, 240, 480);
  
    rotateX(radians(ang));
    rotateY(-radians(ang));
    rotateZ(-radians(ang));
    stroke(0,0,255,150);
    box(120, 240, 480);
  
    ang = ang + 0.1;
}
class Boxes {
    float x, y, z;
    float w,h, d;
  
   Boxes(float nx, float ny, float nz) {
       x = nx;
       y = ny;
       z = nz;
       w = random(40, 80);
       h = random(50, 500);
       d = 40;
   }

        void render() {
            pushMatrix();
            translate(x, y-h/2, z);
            box(w, h, d);
            popMatrix();
        }
    }