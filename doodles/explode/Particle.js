class Particle {
  constructor () {
    this.pos = new p5.Vector(width / 2, height / 2)
    this.vel = p5.Vector.random2D()
    this.vel.mult(random(1, 2))
    this.acc = new p5.Vector()
  }

  applyForce(force) {
    acc.add(force)
  }
  update () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }
  render (t) {
    const nois = noise(this.pos.x) * 255
    fill(nois, 255, 255, 20)
    noStroke()
    ellipse(this.pos.x, this.pos.y, 5, 5)
  }
  checkEdges () {
    if (this.pos.x > width) {
      this.pos.x = width
      this.vel.x *= -1
    }
    if (this.pos.y > height) {
      this.pos.y = height
      this.vel.y *= -1
    }
    if (this.pos.x < 0) {
      this.pos.x = 0
      this.vel.x *= -1
    }
    if (this.pos.y < 0) {
      this.pos.y = 0
      this.vel.y *= -1
    }
  }
  clear () {
    if (this.pos.x > width ||this.pos.y > height || this.pos.x < 0 || this.pos.y < 0) {
      
    }
  }

}
