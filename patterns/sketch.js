let r,g,b;
let s;


function setup(){
    createCanvas(900,600);
    background(77, 0, 13);
}

function mouseClicked(){
    drawPattern();
}

function drawPattern(){
    for (let x = 50; x < width; x += 50) {
        for (let y = random(height/2 + 50, height/2 - 50)) {
            
                s = random(2, 100);
                r = random(0, 240);
                g = random(0, 200);
                b = random(0, 60);

                bird(x,y,s);
            
        }
    }
}
		

function bird(x,y,s){
    //how to code elements so they're equidistant from the center of body?
    noStroke();
    //wings
    fill(r,g,b);
    //arc (x,y,width,height,start,stop); zero starts at 3'oclock(twopi)!!!
    arc(x+155,y+350,70,70,HALF_PI,PI+HALF_PI);
    arc(x+245,y+350,70,70,PI+HALF_PI,HALF_PI);
    
    //body + head 
    fill('white');
    ellipse(x+200,y+300,s+70,s+70);
    ellipse(x+200,y+350,s+120,s+80);
    
    //nosey
    fill(r,g,b);
    triangle(x+190,y+300,x+200,y+310,x+210,y+300);
    
    //eyes
    fill(r,g,b);
    ellipse(x+180,y+300,s+6,s+6);
    ellipse(x+220,y+300,s+6,s+6);
    
}