const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

const bkgrnd = `rgb(51, 51, 51)`
canvas.height = 600
canvas.width = 800
canvas.style.background = bkgrnd

const walker = new Walker({x:400, y: 300}, 10)

function draw() {
  clearBackground()
  walker.move()
  walker.display()
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)

function clearBackground () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
