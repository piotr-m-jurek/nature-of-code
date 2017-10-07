class Ball {
  constructor () {

    this.location = createVector(width / 2, height / 2)
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0)
    this.radius = 10
    this.max_speed = 10

  }
  seek (target) {
    const dir = p5.Vector.sub(target, this.location)
    dir.normalize()
    dir.mult(0.2)
    this.acceleration = dir
  }

  move () {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
  }

  draw () {
    noStroke()
    fill(255)
    ellipse(this.location.x, this.location.y, this.radius, this.radius)
  }
}
