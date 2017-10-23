export default class Vector {
  x: number
  y: number
  constructor(x = 0, y = 0) {
    this.x = x,
      this.y = y
  }
  static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y)
  }
  static sub(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x - v2.x, v1.y - v2.y)
  }
  static mult(v: Vector, param: number): Vector {
    return new Vector(v.x * param, v.y * param)
  }
  static div(v: Vector, param: number): Vector {
    return new Vector(v.x / param, v.y / param)
  }
  add(v: Vector) {
    this.x += v.x
    this.y += v.y
  }
  subtract(v: Vector) {
    this.x -= v.x
    this.y -= v.y
  }
  mag(): number {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
  mult(num: number) {
    this.x *= num
    this.y *= num
  }
  div(num: number) {
    this.x /= num
    this.y /= num
  }
  normalize() {
    const m = this.mag()
    if (m != 0) {
      this.div(m)
    }
  }
  limit(max: number) {
    if (this.mag() > max) {
      this.normalize()
      this.mult(max)
    }
  }
  set coords({ x, y }: Vector) {
    this.x = x
    this.y = y
  }
}
