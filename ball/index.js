let ball
let target

function setup () {
  createCanvas(800, 600)
  background(51)
  ball = new Ball()
}

function draw () {
  background(51)
  target = createVector(mouseX,mouseY)
  ball.seek(target)
  ball.move()
  ball.draw()
}
