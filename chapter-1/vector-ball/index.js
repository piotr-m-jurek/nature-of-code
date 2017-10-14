const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.background = `rgb(51, 51, 51)`

const position = new Vector(0, 0)
const speed = new Vector(3, 3)


function draw () {
  clearBackground()

  position.add(speed)

  if (position.x > canvas.width - 20|| position.x < 0) {
    speed.x *=  -1
  }
  if (position.y > canvas.height - 20 || position.y < 0) {
    speed.y *= -1
  }

  ctx.fillStyle = `rgb(255, 255, 255)`
  ctx.beginPath()
  ctx.ellipse(position.x, position.y, 20, 20, 0, 0, 360, false)
  ctx.fill()
  ctx.closePath()
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)
