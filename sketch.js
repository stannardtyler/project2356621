function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("project");
  background(220);
}

function draw() {
  fill(255, 0, 0);
  circle(mouseX, mouseY, 50);


}
