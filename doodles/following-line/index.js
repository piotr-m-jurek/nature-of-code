let mouse
let center
function setup () {
  createCanvas(innerWidth-20,innerHeight-20)
  background(51)
}


function draw() {
  background(51)
  center = new p5.Vector(width/2,height/2)
  mouse = new p5.Vector(mouseX,mouseY)
  stroke(255)
  const mouseLine = mouse.sub(center)
  const mouseMag = mouseLine.mag()
  mouseLine.mult(1)
  fill(255)
  rect(0,5,mouseMag,5)
  translate(center.x, center.y)
  line(0, 0, mouseLine.x, mouseLine.y)
}
