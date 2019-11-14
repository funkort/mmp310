/*mariam kassim
  plot sketch
  11/14/19*/


//global variables

//var story = "it was like he couldn't leave her alone...";
var story='';
var storyX;
var storyY;

var boyWords = ' "can i holla?" ';
var boyX = 700;
var boyY = 250;

var setting = "street";

function setup(){
    createCanvas(900,600)
    textSize(25);
	textAlign(CENTER, CENTER);
    //story
	storyX = width / 2;
	storyY = height - 140;
}

//if mousepressed the setting will change from first string to second string
function mousePressed() {
	if (setting == "street") {
		setting = "sky";
	} else if (setting == "sky") {
		setting = "forest";
	} else if (setting == "forest") {
		setting = "street";	
	}
}

function draw(){
    
    /*i understand the elements are being
    redrawn so they're jittery; how to 
    make them classes so they don't do 
    that??*/
    
if(setting == "street"){
    background(3,76,144)
    fill('black');
    noStroke();
    rect(0, 500, width, 300);
    
    fill(255,249,204);
    noStroke();
    rect(0,540,width/8, 25);
    
    fill(255,249,204);
    noStroke();
    rect(width/4,540,width/8, 25);
    
    fill(255,249,204);
    noStroke();
    rect(width/2,540,width/8, 25);
    
    fill(255,249,204);
    noStroke();
    rect(675,540,width/8, 25);
    
    fill(255,249,204);
    noStroke();
    rect(890,540,width/8, 25);
    
    for (let x = -150; x < width; x += 20) {let y = random(height);
            fill('white');
            noStroke();
            ellipse(x + 100, y, 10);}
    story='they met on her way home...';
    
}else if (setting =="sky"){
    background(154, 229, 242);
    let spacer=100;
    for (let x = 0; x < width; x += spacer) {
      for (let y = 0; y < height; y += spacer) {
        cloud(x +random(0,spacer/2), y+random(0,spacer/2),1);
        }
        story="it was like he couldn't leave her alone...";
    }
    
}else if (setting =="forest"){
    background(170, 221, 119)
    background(170, 221, 119)
    let spacer=100;
    for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      tree(x +random(0,spacer/2), y+random(0,spacer/2),random(.5,1));
    } 
}
    story="just thirsty.";
}
    
    //char1
    boy();
    
    //char 2
    girl();
    
    //text
    texts();
    
    
    
}

function texts (){
    /*can i use constrain so
    the rects dont have to 
    be hardcoded?*/
    fill(255,249,204)
    rect (270,40,350,40,70);
    rect (200,439,500,35,70);
    rect (621,232,160,35,70);
    fill(0);
    text(story, storyX, storyY);
    text(boyWords, boyX, boyY);
    //instructions
    text('click 4 bars', storyX, storyY-400);
}

function tree(treeX,treeY,size){
    fill(76, 54, 11);
    noStroke();
    rect(treeX,treeY, size*17,size* 55)
    
    fill(29, 118, 29);
    noStroke();
    ellipse(treeX+8, treeY, size*40,size*40);
    
}
    function cloud(cloudX,cloudY,size){
    fill(255, 255, 255);
	noStroke();
    arc(cloudX, cloudY, 25*size , 20*size, PI + TWO_PI, TWO_PI);
	arc(cloudX + 10, cloudY, 25*size, 35*size, PI + TWO_PI, TWO_PI);
	arc(cloudX + 25, cloudY, 25*size, 35*size, PI + TWO_PI, TWO_PI);
	arc(cloudX + 40, cloudY, 30*size, 20*size, PI + TWO_PI, TWO_PI);
    
    arc(cloudX, cloudY, 25 *size, 20*size, TWO_PI, TWO_PI);
	arc(cloudX + 10, cloudY, 25*size, 35*size, TWO_PI, TWO_PI);
	arc(cloudX + 25, cloudY, 25*size, 35*size, TWO_PI, TWO_PI);
	arc(cloudX + 40, cloudY, 30*size, 25*size, TWO_PI, TWO_PI);  
}
    
    
function boy(x,y,size){
   fill('orange');
    triangle(700, 250, 600, 400, 800, 400);
    //eyes
    fill('white');
    noStroke();
    ellipse(670,320,10,10);
    ellipse(730,320,10,10);
    //mouth
    arc(700, 360, 50, 50, 0, PI, OPEN);
    //stache
    fill('black');
    rect(672,360, 55, 5); 
}

function girl (x,y,size){
   fill('pink');
    triangle(300,250,200,400,400,400);
    //lashes
    fill('black');
    rect(280, 312, 1, 5);
    rect(275, 314, 1, 5);
    rect(284, 314, 1, 5);
    
    rect(320, 312, 1, 5);
    rect(315, 314, 1, 5);
    rect(324, 314, 1, 5);
    
    //eyes
    fill('white');
    noStroke();
    ellipse(280,320,10,10);
    ellipse(320,320,10,10);
    
    //mouth
    rect(310,350,20,5); 
    
}

        
    



