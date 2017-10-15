class Mover {
  constructor (mass) {
    this.location = new Vector()
    this.velocity = new Vector()
    this.acceleration = new Vector()
    this.maxSpeed = 10
    this.radius = mass * 2
    this.mass = mass
  }
  update () {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.location.add(this.velocity)
  }
  randomize () {
    this.location.add(new Vector(Math.random() * canvas.width, Math.random() * canvas.height))
  }
  followMouse (position) {
    dir.normalize()
    dir.mult(0.5)
    this.acceleration = dir
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.location.add(this.velocity)
  }
  display () {
    ctx.fillStyle = `rgb(255, 255, 255)`
    ctx.beginPath()
    ctx.ellipse(this.location.x, this.location.y, this.radius, this.radius, 0, 0, 360, false)
    ctx.fill()
    ctx.closePath()
  }
  checkEdges () {
    if (this.location.x > canvas.width) {
      this.location.x = 0
    } else if (this.location.x < 0) {
      this.location.x = canvas.width
    }
    if (this.location.y > canvas.height) {
      this.location.y = 0
    } else if (this.location.y < 0) {
      this.location.y = canvas.height
    }
  }
  bounce () {
    if (this.location.x > canvas.width - this.radius || this.location.x < 0 + this.radius) {
      this.velocity.x *= -1
    }
    if (this.location.y > canvas.height - this.radius || this.location.y < 0 + this.radius) {
      this.velocity.y *= -1
    }
  }
  set setAcc ({x, y}) {
    this.acceleration.x = x,
    this.acceleration.y = y
  }
  applyForce(force) {
    const f = Vector.div(force, this.mass)
    this.acceleration.add(f)
  }
}
