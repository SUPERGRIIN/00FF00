//globala variabler
PImage cardImg;
float velocity = 0.001;
float[] x;     
float[] y;
float[] xInc;   
float[] yInc;
int numArray;   
int GridSpace=10;
float proximity;  

Card card;
Card card1;
Card card2;
Card card3;
Card card4;
Card card5;

void setup()
{


    cardImg = loadImage("data/RB.jpg");
  
    size(innerWidth-15,innerHeight-15);
    noCursor();
    background(255);
    stroke(0,255,0);
    strokeWeight(1);
    strokeJoin(ROUND);
    for (int i=0; i<width; i+=GridSpace){
  line(i,0,i,height);
    }
for (int i=0; i<height; i+=GridSpace){
line(0,i,width,i);
}
numArray = 10;

card = new Card();
card1 = new Card();
card2= new Card();
card3 = new Card();
card4 = new Card();
card5 = new Card();

}



void draw()
{
card.drawCard();
card1.drawCard();
card2.drawCard();
card3.drawCard();
card4.drawCard();
card5.drawCard();
  
  
}


class Card 
{


float startPos;
float startYPos;
float x;
float y;
float velocity;
float speed;
int dir;

 Card() 
{
  this.dir = (int)random(2);
  this.x = random(width);
  this.y = random(100);
  this.velocity = .5;
  this.speed = random(.008,3);
  this.startPos = this.x;
  this.startYPos = this.y;
  //println(this.dir);
}

  
void drawCard()
{

    
  if (this.y >= height-150)
{
    this.velocity = -this.velocity+2;
      
    this.y = height-150;
}
    
  this.velocity = this.velocity + 0.001;
    
  this.y = this.y + this.velocity;

    
  if (this.dir == 1)
{
      
 
    if (this.x > width)
{

      this.x = random(width);
      this.y = random(width);
      this.velocity = random(width);
      this.speed = random(width);
      this.startPos = this.x;
      this.startYPos = this.y;
      this.dir = (int)random(2);
} 
      

else if (this.x < width)
{
      this.x = this.x + speed;
}
} 
    
   
else
{
    if (this.x < -100) 
{
      this.x = random(width);
      this.y = random(height);
      this.velocity = random(-5, 1);
      this.speed = random(0.8,3);
      this.startPos = this.x;
      this.startYPos = this.y;
      this.dir = (int)random(2);
        
} 
      
else if (this.x > -100)
{
      this.x = this.x - speed;
}
}
    

    
  image(cardImg, this.x, this.y, 120,240);

    
}
}