
float radious = 1000;

void setup(){
    size(innerWidth-15,innerHeight-15, P3D);
  noCursor();
  noFill();
  stroke(0,255,0);
  strokeWeight(1);
  smooth(200);
  frameRate(30);
}

void draw(){
  background(255);
  translate(width / 2, height / 2, 0);
  rotateX(frameCount * .03);
  rotateY(frameCount * .03);
  rotateZ(frameCount * .03);
  int resolution = int(map(900, 0, width, 2, 30)) * 2;
  float step = TWO_PI / resolution;
  for(int i = 0; i < resolution / 2; i++){
    for(int j = 0; j < resolution; j++){
      float r1 = step * i;
      float nr1 = step * (i + 1);
      float r2 = step * j;
      float nr2 = step * (j + 1);
      PVector p1 = new PVector(radious * sin(r1) * cos(r2), radious * cos(r1), radious * sin(r1) * sin(r2));
      PVector p2 = new PVector(radious * sin(nr1) * cos(r2), radious * cos(nr1), radious * sin(nr1) * sin(r2));
      PVector p3 = new PVector(radious * sin(nr1) * cos(nr2), radious * cos(nr1), radious * sin(nr1) * sin(nr2));
      PVector p4 = new PVector(radious * sin(r1) * cos(nr2), radious * cos(r1), radious * sin(r1) * sin(nr2));
      beginShape();
      vertex(p1.x, p1.y, p1.z);
      vertex(p2.x, p2.y, p2.z);
      vertex(p3.x, p3.y, p3.z);
      vertex(p4.x, p4.y, p4.z);
      endShape();
    }
  }
}