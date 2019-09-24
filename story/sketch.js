/* mariam kassim | mmp 310
 * story sketch
 * 09/05/2019
*/

let font;
var x = 0;
var words = 'damn shordie, okay!'; 

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/CuteFont-Regular.ttf');
}

function setup() {
  createCanvas(710, 400, WEBGL);
  textFont(font);
  textSize(15);
  textAlign(RIGHT);
}

function draw() {
  background(255);
    
 /*dialogue box*/  
  noFill()
  stroke('black');
  strokeWeight(2);
  rect(-340,90,200,75)

  /*char 2 head*/
  noFill()
  strokeWeight(1.5);
  stroke('black');
  ellipse(x,20,240,280)
  x = x + random(-1, 1); 
  if (x <60) {
    x = 0;}
    
    
  fill(0);
  ellipse(x-40,-20,10,10)
  x = x + random(-1, 1);

  fill(0);
  ellipse(x+40,-20,10,10)
  x = x + random(-1, 1);
    
  fill(0);
  ellipse(x,70,40,40)
  x = x + random(-1, 1);
  
    
  /* char 1 head */
  noFill();
  strokeWeight(1.5);
  stroke('black');
  ellipse(250, -20, 52, 72);
  
  noFill();
  strokeWeight(1);
  stroke('red');
  ellipse(248, -20, 60, 72);  
    
  noFill();
  strokeWeight(1);
  stroke('blue');
  ellipse(254, -30, 50, 78);    
 
  noFill();
  strokeWeight(1);
  stroke('red');
  ellipse(254, -15, 60, 72);  
    
  noFill();
  strokeWeight(1);
  stroke('#ffea00');
  ellipse(248, -30, 52, 72); 
    
  noFill();
  strokeWeight(1);
  stroke('blue');
  ellipse(250, -10, 42, 78); 
    
  /*char 1 neck*/
  noFill();
  strokeWeight(1.5);
  stroke('black');
  ellipse(250, 20, 12, 15);   

  /*char 1 arms*/
  noFill();
  strokeWeight(1.5);
  stroke('black');
  ellipse(233, 40, 12, 15);
  
  noFill();
  strokeWeight(1.5);
  stroke('black');
  ellipse(267, 40, 12, 15);
  
  strokeWeight(1.5);
  stroke('black');
  fill('white');
  ellipse(270,82, 10, 75)
 
  /*char 1 feet + right leg*/
  strokeWeight(1.5);
  stroke('black');
  fill('black');
  ellipse(255,115, 15, 10); 
    
  strokeWeight(1.5);
  fill('black');
  ellipse(265,120, 15, 10);
  
  strokeWeight(1.5);
  stroke('black');
  fill('white');
  ellipse(295,110, 80, 20)
  
  strokeWeight(1.5);
  stroke('blue');
  fill('white');
  ellipse(295,107, 80, 20)
    
  /*char 1 body*/
  noFill();
  strokeWeight(1.5);
  stroke('black');
  ellipse(250,68, 37, 85);  
    
  noFill();
  strokeWeight(1.5);
  stroke('red');
  ellipse(255,68, 37, 85);
    
  noFill();
  strokeWeight(1.5);
  stroke('blue');
  ellipse(250,63, 37, 85);
    
  noFill();
  strokeWeight(1.5);
  stroke('yellow');
  ellipse(252,63, 37, 85);
    
  /*char 1 left leg*/
  shearX(PI / 5.0);
  strokeWeight(1.5);
  stroke('black');
  fill('white');
  ellipse(160,85, 25, 70)
  
  strokeWeight(1.5);
  stroke('red');
  fill('white');
  ellipse(155,85, 25, 70)
    
  /*char 1 left arm*/
  strokeWeight(1.5);
  stroke('black');
  fill('white');
  ellipse(200,70, 15, 70)
    
  strokeWeight(1.5);
  stroke('yellow');
  fill('white');
  ellipse(205,70, 15, 70)
    
  strokeWeight(1.5);
  stroke('blue');
  fill('white');
  ellipse(197,70, 15, 70)   
   
  /*dialogue*/    
  textSize(20);
  fill('black');
  noStroke();
  text(words, 100, 50);
}
