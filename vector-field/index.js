let t = 0
const amount = 100
const pSize = 20
function setup () {
    createCanvas(innerWidth, innerHeight)
    background(51)
    colorMode(HSB, 255)
}


function draw () {
  let xoff = 0
  let yoff = 0
  const rows = height / pSize
  const cols = width / pSize
  background(51)
  stroke(255)
  strokeWeight(2)
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      const pos = new p5.Vector(i* pSize,j* pSize)
      const n = noise(xoff, yoff, t) * TWO_PI
      const v = p5.Vector.fromAngle(n)
      fill(n)
      push()
      translate(pos.x, pos.y)

      rotate(v.heading())
      line(0, 0, pSize, 0)
      pop()
      xoff +=0.1
    }
    yoff += 0.1
    t+=0.0003
  }
}

// function draw () {
//   background(51)
//   for(let i = 0; i < width / pSize; i++) {
//     for(let j = 0; j < height / pSize; j++) {
//       target = createVector(noise(i, j, t), noise(i, j, t))
//       const pos = new p5.Vector(i*pSize, j*pSize)
//       const dir = p5.Vector.sub(target, pos)
//       dir.normalize()
//       dir.mult(pSize / 3)
//       dir.add(pos)
//       stroke(255)
//       strokeWeight(5)
//       line(pos.x, pos.y, dir.x, dir.y)
//     }
//   }
//   // debugger
//   t+=1
// }
