let t = 0
const gravity = new p5.Vector(0, 0.1)
let particles = new Array()
const num = 500
function setup () {
    createCanvas(innerWidth, innerHeight)
    background(0)
    for(let i = 0; i < num; i++) {
      particles.push(new Particle())
    }
    colorMode(HSB)
}

function draw () {
  background(0)
  particles.forEach(p => {
    p.update()
    p.checkEdges()
    p.render(t)
  })
  t+=0.1
}
