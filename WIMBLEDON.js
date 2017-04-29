


float x=0, y=0, z=0;
float xs=3, ys=2.1, zs=1;
float r;

void setup(){
    size(innerWidth-15,innerHeight-15, P3D);
noCursor();
smooth();
ortho(-width, width, -height, height, -1000, 1000);
}

void draw(){
background(255);
translate(width/2,height/2, 0); 
pushMatrix();
translate(x,y,z);
rectMode(CENTER);
stroke(0,255,0);
strokeWeight(3);
scale(.3);
noFill();
  rotateX(radians(r));
  rotateY(radians(r));
  rotateZ(radians(r));
  r=r+-.7;
box(width/6,height/6*2,width/6*3);
fill(0,255,0);
popMatrix();
x=x+xs;
if(x>(width-170) || x<-(width-170)){
x=x-xs;
xs=-xs;
}
x=x+xs;
if(y>(height) || y<(height)){
y=y-ys;
ys=-ys;
}
z=z+zs;
if(z>(width) || z<-(width)){
z=z-zs;
zs=-zs;
}

}
