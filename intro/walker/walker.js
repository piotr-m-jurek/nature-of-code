class Walker {
  constructor ({x, y}, size) {
    this.x = x,
    this.y = y,
    this.size = size
  }
  display () {
    ctx.strokeStyle = `rgb(255,255,255)`
    ctx.strokeRect(this.x, this.y, this.size, this.size)
  }
  move () {
    let stepX = Math.floor(Math.random() * 3) - 1
    let stepY = Math.floor(Math.random() * 3) - 1
    this.x += stepX
    this.y += stepY
  }
}
