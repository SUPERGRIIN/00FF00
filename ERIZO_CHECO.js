float r;

void setup() {
    size(innerWidth-15,innerHeight-15, P3D);
    background(255);
    noCursor();
    translate(100,100,100);

}
void draw() {
    background(255);
    translate(width/2, height/2);
    rotateY(radians(r));
    rotateX(radians(r));
    rotateZ(radians(r));
    r = r +1.3;
    noFill();
    stroke(255,0,0);  
    line(-100, 0, 0, 100, 0, 0);
    stroke(0,255,0);
    line(0, -100, 0, 0, 100, 0);
    stroke(0,0,255);
    line(0, 0, -100, 0, 0, 100);
}