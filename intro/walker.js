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
    this.x += (Math.random() * 2) - 1
    this.y += (Math.random() * 2) - 1
  }
}
