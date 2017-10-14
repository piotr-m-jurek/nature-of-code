const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

const bkgrnd = `rgb(51, 51, 51)`

canvas.height = 600
canvas.width = 800
canvas.style.background = bkgrnd

function draw() {
  for (let i = 0; i < canvas.width; i+=100) {
    ctx.ellipse(i, (Math.sin(i) * canvas.height / 4) +( canvas.height / 2), 1, 1, 0, 0, 360, false)
  }
  ctx.strokeStyle = `rgb(255,255,255)`
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)

function clearBackground () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
