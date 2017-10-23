import { canvas, ctx } from '../utils/canvas.js'
import Vector from '../utils/Vector.js';
import { getMousePos, clearBackground } from '../utils/index.js';
import Mover from '../utils/Mover.js'

const mouse = new Vector()
document.addEventListener('mousemove', function (e) {
  mouse.coords = getMousePos(e, canvas)
})


const ball = new Mover()
const balls: Mover[] = []

for (let i = 0; i < 10; i++ ) {
  const m = new Mover(10)
  m.randomize()
  balls.push(m)
}
function draw () {
  clearBackground()
  balls.forEach(ball => {
    ball.followMouse(mouse)
    ball.checkEdges()
    ball.display()
  })
  
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)

