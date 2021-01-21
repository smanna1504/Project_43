 var h, m, s;
 var hAngle,mAngle,sAngle;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  h = hour();
  m = minute();
  s = second();
  
  strokeWeight(1)
  textSize(24);
    
  fill(255,0,0);
  stroke(255,0,0);
  if(h>12){
  text(h%12,120,height-10);
  }else{text(h,120,height-10);}

  fill(0,255,0);
  noStroke();
  text(m,160,height-10);

  fill(0,0,255);
  noStroke();
  text(s,220,height-10);

  fill(255);
  text(":",145,height-10);
  text(":",195,height-10);
  if(h>=12){
    text("PM",260,height-10);
  }else if(h<12){
    text("AM",260,height-10);
  }

  if(h>12){
    hAngle = map(h%12, 0, 12, 0, 360);
  }else{hAngle = map(h, 0, 12, 0, 360);}

  mAngle = map(m, 0, 60, 0, 360);
  sAngle = map(s, 0, 60, 0, 360);
  
  angleMode(DEGREES);
  
  push();
  stroke(255, 0 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(hAngle);
  line(0, 0, 0, -50);
  pop();
  
  push();
  stroke(0, 255 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(mAngle);
  line(0, 0, 0, -75);
  pop();
  
  push();
  stroke(0, 0 , 255);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(sAngle);
  line(0, 0, 0, -100);
  pop();
  
  noFill();
  strokeWeight(7);
  stroke(255, 0, 0);
  arc(width/2, height/2, 275, 275, -90, hAngle - 90);
  stroke(0, 255, 0);
  arc(width/2, height/2, 300, 300, -90, mAngle - 90);
  stroke( 0, 0, 255);
  arc(width/2, height/2, 325, 325, -90, sAngle - 90);
 
}