class Mover {
  constructor (x, y) {
    this.location = new Vector(x, y)
    this.velocity = new Vector()
    this.acceleration = new Vector()
  }
  update () {
    this.location.add(this.velocity)
  }
}
