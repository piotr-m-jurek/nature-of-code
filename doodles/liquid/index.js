let T = 0 
// let wind
// let wind = new p5.Vector(0.01, 0)
const gravity = new p5.Vector(0, 0.1)
const a = 10
let balls = []
const size = new p5.Vector(640, 480)
function setup () {

  createCanvas(size.x,size.y)
  background(51)
  noStroke()
  fill(42)
  rect(0, height / 2, width, height / 2)
  for (let i  = 0; i < a; i++) {
    balls.push(new Ball())
  }

}

function draw () {

  wind = new p5.Vector(noise(T) -0.5, 0) 
  background(51)
  noStroke()
  fill(32)
  rect(0, height / 2, width, height / 2)
  balls.forEach(ball => {
    // const m = p5.Vector.mult(gravity, ball.mass)
    ball.applyForce(gravity)
    // ball.applyForce(wind)
    ball.move()
    ball.checkEdges()
    ball.display()
  })
  T += 0.01
}

class Ball {
  constructor () {
    this.location = new p5.Vector(random(10, width - 10), height / 5)
    this.velocity = new p5.Vector()
    this.acceleration = new p5.Vector()
    const randomSize = random(5, 30)
    this.radius = randomSize
    this.mass = randomSize / 10
  }

  applyForce (force) {
    const f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  move () {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  checkEdges () {
    if (this.location.x > width) {
      this.location.x = width
      this.velocity.x *= -1
    }
    if (this.location.y > height) {
      this.location.y = height
      this.velocity.y *= -1
    }
    if (this.location.x < 0) {
      this.location.x = 0
      this.velocity.x *= -1
    }
    if (this.location.y < 0) {
      this.location.y = 0
      this.velocity.y *= -1
    }

  }

  display () {
    strokeWeight(1)
    stroke(255)
    fill(100)
    ellipse(this.location.x, this.location.y, this.radius, this.radius)
  }
}