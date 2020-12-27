let r = 200;
let totalPoints = 0;
let circlePoints = 0;
let recordPi = 0;

function setup(){
    createCanvas(400,400);
    background(0);
    stroke(255,100,150);
    strokeWeight(1);
    noFill();
    translate(width/2, height/2);
    circle(0,0,r*2);
    rectMode(CENTER);
    rect(0,0,r*2,r*2);
}

function draw(){
    translate(width/2, height/2);
    strokeWeight(2);
    var valuePi = 0;

    for(i = 0; i<100; i++){
        var x = random(-r,r);
        var y = random(-r,r);
        totalPoints++;
        let d = sqrt(x*x + y*y);

        if(d<r){
            stroke(100,255,150);
            circlePoints++;
        }
        else if(r<d){
            stroke(150,100,255);
        }

         valuePi = 4 * (circlePoints/totalPoints);
        point(x,y);
}

    console.log(recordPi);
    let recordDiff = Math.abs(Math.PI - recordPi);
    let diff = Math.abs(recordPi - valuePi);
    if(diff<recordDiff){
        recordDiff = diff;
        recordPi = valuePi;
    }
    document.getElementById("texte").innerHTML = "My closest approximation of Pi  derived from diagram below is" + recordPi;
    
}