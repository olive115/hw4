function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
 
  for (var x = 75; x < 400; x = x + 10) {
    line(x, height/2, x+100, height/2-75);
  }
}
