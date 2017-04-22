String[] mp;
PFont Gobold;
float x, y;
float hr, vr;
String pala = "mp.length()";



void setup () {
    size(innerWidth-15,innerHeight-15);
 noCursor();
 background (255);
 textAlign(CENTER, CENTER);
  hr = textWidth(pala) / 2;
  vr = (textAscent() + textDescent()) / 3000;
  noStroke();
 // x = width / 2;
 // y = height / 2;
  Gobold = loadFont("/00FF00/Verdana-8.vlw");;
  textFont (Gobold);
  mp = loadStrings ("/00FF00/H.txt");
    }

void draw () {
 fill(255);
  rect(0, 0, width, height);
  fill(0,255,0);
  for (int i = 0; i<mp.length; i++)
  {
    text (mp [i++], random(0,width), (mouseY));
  }
}
