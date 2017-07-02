let n = 0
let c = 4
function setup () {
  createCanvas(800,600)
  background(51)
  angleMode(DEGREES)
  colorMode(HSB)
}

function draw () {
  translate(width/2, height/2)
  const angle = n * 137.5
  const radius = c * sqrt(n)
  if(radius > height/2) return

  const x = radius * cos(angle)
  const y = radius * sin(angle)
  fill(angle % 255, 255,255)
  noStroke()
  // const size = map(radius,0,2*PI,1.1,1.25)
  ellipse(x,y, 5, 5)
  n++
}
