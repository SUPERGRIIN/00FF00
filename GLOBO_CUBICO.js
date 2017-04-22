PImage pix; 
PImage pix2; 
PImage pix3; 
PImage pix4; 
PImage pix5; 
PImage pix6; 
float rotx = PI/4; 
float roty = PI/4; 
float r;

void setup() 
{ 
    size(innerWidth-15,innerHeight-15, P3D);
    pix = loadImage("data/1p.png"); 
    pix2 = loadImage("data/2p.png"); 
    pix3 = loadImage("data/3p.png"); 
    pix4 = loadImage("data/4p.png"); 
    pix5 = loadImage("data/5p.png"); 
    pix6 = loadImage("data/6p.png"); 
    textureMode(NORMAL); 
    background(255);
    noCursor();
    ortho(-width, width, -height, height, -1000, 1000);
   
    stroke(0,255,0);
    strokeWeight(0.001);
} 

void draw() 
{ 
    background(255); 
    translate(width/2.0, height/2.0, 180); 
    rotateY(radians(r));
    rotateX(radians(r));
    rotateZ(radians(r));
    r = r +.5;
    scale(200); 
    TexturedCube(pix,pix2,pix3,pix4,pix5,pix6); 
    
  
} 

void TexturedCube(PImage pix,PImage pix2,PImage pix3,PImage pix4,PImage pix5,PImage pix6)
{ 
  beginShape(QUADS); 
texture(pix); 

// +Z "front" face 
vertex(-1, -1,  1, 0, 0); 
vertex( 1, -1,  1, 1, 0); 
vertex( 1,  1,  1, 1, 1); 
vertex(-1,  1,  1, 0, 1); 
endShape(); 
beginShape(QUADS); 
texture(pix2); 
// -Z "back" face 
vertex( 1, -1, -1, 0, 0); 
vertex(-1, -1, -1, 1, 0); 
vertex(-1,  1, -1, 1, 1); 
vertex( 1,  1, -1, 0, 1); 
endShape(); 
beginShape(QUADS); 
texture(pix3); 
// +Y "bottom" face 
vertex(-1,  1,  1, 0, 0); 
vertex( 1,  1,  1, 1, 0); 
vertex( 1,  1, -1, 1, 1); 
vertex(-1,  1, -1, 0, 1); 
endShape(); 
beginShape(QUADS); 
texture(pix4); 
// -Y "top" face 
vertex(-1, -1, -1, 0, 0); 
vertex( 1, -1, -1, 1, 0); 
vertex( 1, -1,  1, 1, 1); 
vertex(-1, -1,  1, 0, 1); 
endShape(); 
beginShape(QUADS); 
texture(pix5); 
// +X "right" face 
vertex( 1, -1,  1, 0, 0); 
vertex( 1, -1, -1, 1, 0); 
vertex( 1,  1, -1, 1, 1); 
vertex( 1,  1,  1, 0, 1); 
endShape(); 
beginShape(QUADS); 
texture(pix6); 
// -X "left" face 
vertex(-1, -1, -1, 0, 0); 
vertex(-1, -1,  1, 1, 0); 
vertex(-1,  1,  1, 1, 1); 
vertex(-1,  1, -1, 0, 1); 

endShape(); 

} 