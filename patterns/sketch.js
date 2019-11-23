/*mariam kassim
mmp 310
patterns: loops + random variations
nov 23, 2019
-use two variables to randomly change size, shape or color.
-use a loop to draw a series in a pattern.
*/

let r,g,b;
let s;
let spacer;

function setup(){
    createCanvas(900,600);
    background(77, 0, 13);
    bird(250,-250,1);
}

function mouseClicked(){
    drawPattern();
}

function drawPattern(){
    for (let x = -150; x < width; x += 10) {
                
                y= random(-100,1000);
                s = random(.5, 10);
                r = random(5, 240);
                g = random(5, 200);
                b = random(5, 60);

                bird(x,y,s);
    }
}

//function drawPattern(){
//    spacer = 300
//    for (let x = -180; x < width; x += spacer) {
//        for (let y = -100; y < height; y += spacer) {
//               s = random(.5, 8);
//               r = random(5, 240);
//               g = random(5, 200);
//               b = random(5, 60); 
//    
//                bird(x +random(0,spacer/2), y+random(0,spacer/2),s);
//        } 
//    }
//    
//}
		

function bird(x,y,s){
    //how to code elements so they're equidistant from the center of body?
    noStroke();
    //wings
    fill(r,g,b);
    stroke('black');
    //arc (x,y,width,height,start,stop); zero starts at 3'oclock(twopi)!!!
    arc(x+155,y+350,70,70,HALF_PI,PI+HALF_PI);
    arc(x+245,y+350,70,70,PI+HALF_PI,HALF_PI);
    
//    //body + head 
//    fill('white');
//    stroke('black');
//    ellipse(x+200,y+300,s+70,s+70);
//    noStroke();
//    ellipse(x+200,y+350,s+120,s+80);
    
    //nosey
    fill(r,g,b);
    triangle(x+190,y+300,x+200,y+310,x+210,y+300);
    
    //eyes
    fill(r,g,b);
    ellipse(x+180,y+300,s+6,s+6);
    ellipse(x+220,y+300,s+6,s+6);
    
}