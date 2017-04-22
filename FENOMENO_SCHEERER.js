String[] mp;
PFont Gobold;
float x, y;
float hr, vr;
String pala = "mp.length()";



void setup () {
    size(innerWidth-15,innerHeight-15);
 frameRate (12);
 smooth(30);
 noCursor();
 background (255);
 textAlign(CENTER, CENTER);
  hr = (textWidth(pala)) / 2;
  vr = (textAscent() + textDescent()) / 30;
  noStroke();
  x = width;
  y = height;
  Gobold = loadFont("data/YuGothic-Light-48.vlw");;
  textFont (Gobold);
  mp = loadStrings ("data/SPC.txt");
    }

void draw () {
 fill(255);
  rect(0, 0, width, height);
 fill(0,255,0);
  for (int i = 0; i<mp.length; i++)
  {
    text (mp [i++], random(x), random(y));

  }
}