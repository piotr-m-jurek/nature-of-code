const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

const bkgrnd = `rgb(255, 255, 255)`
canvas.height = 600
canvas.width = 800
canvas.style.background = bkgrnd

const grid = canvas.width / 20
let bars = new Array(grid).fill(0)
function draw() {
  let rand = Math.floor(Math.random() * grid)
  bars[rand] = bars[rand] += 1
  for (let i = 0; i < bars.length; i++) {
    ctx.fillStyle = `rgb(51, 51, 51)`
    ctx.strokeStyle = `rgb(0, 0, 0)`
    ctx.strokeRect(grid * i, canvas.height, grid, - bars[i])
    ctx.fillRect(grid * i, canvas.height, grid, - bars[i])

  }
  requestAnimationFrame(draw)
}

requestAnimationFrame(draw)


function clearBackground () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
