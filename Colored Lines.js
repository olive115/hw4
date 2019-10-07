function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  colorMode(HSB);
  stroke(255);
  
  stroke(random(255), 100, 100);
  for (var x = 10; x < width -10; x = x + 40) {
    line(x, height/2, mouseX, mouseY);
  }
}
