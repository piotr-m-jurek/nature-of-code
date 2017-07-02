let t = 0
const gravity = new p5.Vector(0, 0.1)
let particles = new Array()
const num = 500
function setup () {
    createCanvas(640, 480)
    background(51)
    for(let i = 0; i < num; i++) {
      particles.push(new Particle())
    }
    colorMode(HSB)
}

function draw () {
  background(51)
  particles.forEach(p => {
    p.update()
    p.checkEdges()
    p.render(t)
  })
  t+=0.1
}

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

}
