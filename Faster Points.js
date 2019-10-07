function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  
  var x = random(width);
  var y = random(height);
  
  for (i=0; i< 1000; i++){
    stroke(x, y, 100);
    point(x, y);
  }
}
