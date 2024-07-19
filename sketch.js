let x=200;
let y=200;

function setup() {
  createCanvas(400, 400);
   background('pink')
}

function draw() {
  // background(220);
  // let speed=0.1;


  let n = floor(random(8));
  console.log(n);
  

    if(n==0) {
    x=x+10;
  }  
  else if(n==1){
    stroke('blue');
    x=x-10;
  }
  else if(n==2){
    stroke('green');
    y=y+10;
  }
  else if(n==3){
    stroke('orange');
    y=y-10;
  }
  else if(n==4){
    stroke('yellow');
    x=x+35;
  }
  else if(n==5){
    stroke('darkslategrey');
    x=x-35;
  }
  else if(n==6){
    stroke('lavender');
    y=y+35;
  }
  else if(n==7){
    stroke('white');
    y=y-35;
  }

  
  strokeWeight(5);
  point(x,y);
  }
  
