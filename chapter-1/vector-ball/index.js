const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.background = `rgb(51, 51, 51)`

const mouse = new Vector()

document.addEventListener('mousemove', function(e) {
  const pos = getMousePos(e)
  mouse.x = pos.x
  mouse.y = pos.y
})

const ball = new Mover(120, 45, 10)
const balls = []

for (let i = 0; i < 50; i++ ) {
  balls.push(new Mover(10))
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

