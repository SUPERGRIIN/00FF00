int numAnchors = 4; 
int n=6;
int frames = 120;
int exp = int(pow(2, n));
int dir;
float theta, fc;
boolean save;
Curve[] myCurves = new Curve[numAnchors];
PVector[] origAnchors = new PVector[numAnchors];
PVector[] myAnchors = new PVector[numAnchors];

void setup() {
    size(innerWidth-15,innerHeight-15, P3D);
  background(255);
  noCursor();
  ortho(-width, width, -height, height, -1000, 1000);
  generateAnchors();
  updateAnchors();
  generateCurves();
}

void draw() {
  updateAnchors();
  generateCurves();
  if (save) {
    if (frameCount<=fc+frames) saveFrame("image-###.gif");
  }
  theta += TWO_PI/frames;
}

void generateAnchors() {
  for (int i=0; i<numAnchors; i++) {
    float r = 25;
    float d = 180+i*random(-r, r);
    float vx = width/2 + cos(TWO_PI/numAnchors*i)*d;
    float vy = height/2 + sin(TWO_PI/numAnchors*i)*d;
    origAnchors[i] = new PVector(vx, vy);
    myAnchors[i] = origAnchors[i].get();
  }
}

void updateAnchors() {
  for (int i=0; i<numAnchors; i++) {
    dir=i%2==0?1:-1;
    myAnchors[i].x = origAnchors[i].x + cos(theta)*(20+2*i)*dir;
    myAnchors[i].y = origAnchors[i].y + sin(theta)*(20+2*i)*dir;
  }
}

void generateCurves() {
  background(255);
  for (int i=0; i<numAnchors; i++) {
    myCurves[i] = new Curve(myAnchors[(i+1)%numAnchors], myAnchors[(i+2)%numAnchors], myAnchors[i%numAnchors]);
    myCurves[i].generateRatios();
    myCurves[i].drawPoints();
  }
}

void mouseReleased() {
  generateAnchors();
  generateCurves();
}

void keyPressed() {
  fc = frameCount;
  save = true;
}

class Curve {

  float[] ratioA = new float[exp];
  float[] ratioB = new float[exp];
  float[] ratioC = new float[exp];
  PVector A, B, C;
  int sz = 5;

  Curve(PVector _A, PVector _B, PVector _C) {
    A = _A;
    B = _B;
    C = _C;
  }

  void generateRatios() {
    float denom = pow(4, n);
    for (int i=0; i<(exp/2); i++) {
      ratioB[i] = (((i*(i+1))/2.0))/denom;
      ratioC[i] = ((((exp-i-1)*(exp-i))/2.0))/denom;
      ratioA[i] = 1-ratioB[i]-ratioC[i];
    }
    for (int i=exp/2; i<exp; i++) {
      ratioB[i] = ((i*(i+1))/2)/denom;
      ratioC[i] = (((exp-i-1)*(exp-i))/2)/denom;
      ratioA[i] = 1-ratioB[i]-ratioC[i];
    }
  }

  void drawPoints() {
    stroke(0,255,0);
    line(A.x, A.y, B.x, B.y);
      }
  }
  