const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
canvas.height = 800
canvas.width = 600
canvas.style.background = 'rgb(51, 51, 51)'

drawPetal(100)

// function draw () {
//   ctx.save()
//   canvas.style.background = `rgb(51, 51, 51)`
//   ctx.translate(100, 100)
//   ctx.fillStyle = `rgb(55, 155, 225)`  
//   ctx.restore()
//   drawCrown(100, 100, 50, 30)
//   requestAnimationFrame(draw)
// }

// requestAnimationFrame(draw)

function drawCrown(hookX, hookY, height, angle) {
  ctx.save()
  ctx.fillStyle = `rgb(55, 155, 225)`
  ctx.beginPath()
  ctx.moveTo(hookX, hookY)

  ctx.rotate(-angle)
  drawPetal(height)
  ctx.rotate(angle)
  drawPetal(height)
  ctx.rotate(angle)
  drawPetal(height)

  ctx.restore()
}

function drawPetal(height) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.quadraticCurveTo(-height, 0, -height, -height)
  ctx.quadraticCurveTo(0, -height, 0, 0)
  ctx.fill()
  ctx.restore()
}
