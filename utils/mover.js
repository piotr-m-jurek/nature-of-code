class Mover {
  constructor (maxSpeed) {
    this.location = new Vector(Math.random() * canvas.width, Math.random() * canvas.height)
    this.velocity = new Vector()
    this.acceleration = new Vector()
    this.maxSpeed = maxSpeed
  }
  update () {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.location.add(this.velocity)
  }
  followMouse (position) {
    const dir = Vector.sub(position, this.location)
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
    ctx.ellipse(this.location.x, this.location.y, 20, 20, 0, 0, 360, false)
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
  set setAcc ({x, y}) {
    this.acceleration.x = x,
    this.acceleration.y = y
  }
}
