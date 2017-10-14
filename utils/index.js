const clearBackground = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

class Vector {
  constructor(x = 0, y = 0) {
    this.x = x,
    this.y = y
  }
  add({x, y}) {
    this.x += x,
    this.y += y
  }
  subtract({x, y}) {
    this.x -= x
    this.y -= y
  }
  mag() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
  mult (num) {
    this.x *= num
    this.y *= num
  }
  div (num) {
    this.x /= num
    this.y /= num
  }
  normalize () {
    const m = this.mag()
    if (m !=0) {
      this.div(m)
    }
  }
  limit (max) {
    if (this.mag() > max) {
      this.normalize()
      this.mult(max)
    }
  }
}
