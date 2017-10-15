const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.background = `rgb(51, 51, 51)`

const mouse = new Vector()
document.addEventListener('mousemove', function (e) {
  mouse.coords = getMousePos(e, canvas)
})

const ball = new Mover()
const balls = []

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

