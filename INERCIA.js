PFont f;
String message = "D I S T A N C I A";
Letter[] letters;

void setup() {
    size(innerWidth-15,innerHeight-15, P3D);
    noCursor();
    f = createFont("Verdana", 12, true);
    textFont(f);
    letters = new Letter[message.length()];
    int x = (width - (int) textWidth(message)) / 2;
    int y = (height / 2);
    for (int i=0; i < message.length(); i++) {
      letters[i] = new Letter(new PVector(x, y, 0), message.charAt(i));
      x += textWidth(message.charAt(i));
    }
frameRate(20);
smooth();
}

void draw() {
    background(255);
  
    if (mousePressed) {
        for (int i=0; i < letters.length; i++) {
          letters[i].goHome();
        }
}
  
for (int i=0; i < letters.length; i++) {
 letters[i].display(); 
}
}

class Letter {
char letter;
PVector home, pos, delta;
  
Letter(PVector pos, char letter) {
  this.home = pos.get();
  this.pos = pos.get();
  this.letter = letter;
  setDeltas();
}
  
void setDeltas() {
  int l = -3;
  int h = 4;
  delta = new PVector(random(l, h), random(l, h), random(-0.1, 0.1));
}
  
void display() {
  fill(0,255,0);
  textAlign(LEFT, CENTER);
  pushMatrix();
  translate(pos.x, pos.y);
  rotate(pos.z);
  text(letter,0, 0);
  popMatrix();
  shift();
}
  
void goHome() {
  pos = home.get();
  setDeltas();
}
  
void shift() {
  if ((pos.x > width)||(pos.x < 0)) {
    delta.x *= -1;
}
  if ((pos.y > height)||(pos.y < 0)) {
    delta.y *= -1;
}
  pos.add(delta);
}
}