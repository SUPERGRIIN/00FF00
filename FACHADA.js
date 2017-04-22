float r;

void setup()
{
    size(innerWidth-15,innerHeight-15, P3D);
  noCursor();
  smooth();
  
}

void draw(){
    background(255);
    translate(innerWidth/2,innerHeight/2); 
        rotateX(map(mouseY, 0, height, PI, -PI));
    rotateY(map(mouseX, 0, width, -PI, PI));
    pushMatrix();
    rectMode(CENTER);
    scale(.5);
    stroke(255);
    strokeWeight(3);
    fill(0,255,0);
    
    box(innerWidth/6,innerHeight/6*2,innerWidth/6*3);
    popMatrix();
}