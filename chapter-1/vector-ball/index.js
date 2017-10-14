const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.background = `rgb(51, 51, 51)`

const ball = new Mover(120, 45, 10)

function draw () {
  clearBackground()
  ball.setAcc = {x: Math.random()* 2 - 1, y: Math.random()* 2 - 1}
  ball.update()
  ball.checkEdges()
  ball.display()

  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)
