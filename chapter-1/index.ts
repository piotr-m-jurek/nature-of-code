import { canvas, ctx } from '../utils/canvas'
import Mover from '../utils/Mover'
import { getMousePos, clearBackground } from '../utils/index';
import Vector from '../utils/Vector';
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

