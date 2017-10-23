import { canvas, ctx } from '../utils/canvas.js'
import Vector from '../utils/Vector.js'
import { getMousePos, clearBackground } from '../utils/index.js'
import Mover from '../utils/Mover.js';
const mouse = new Vector()
document.addEventListener('mousemove', function(e) {
  mouse.coords = getMousePos(e, canvas)
})

const m = new Mover(10)
const movers: Mover[] = []
for (let i = 0; i < 10; i++) {
  const m = new Mover(Math.floor((Math.random() * 15) + 1))
  m.acceleration.y = 0.01
  m.randomize()
  movers.push(m)
}

function draw () {
  clearBackground()
  movers.forEach((m) => {
    m.applyForce(new Vector(Math.random() % 0.1 - 0.05, 0))
    m.bounce()
    m.update()
    m.display()
  })
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)


