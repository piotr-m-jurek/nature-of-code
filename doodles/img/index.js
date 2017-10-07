let img
function setup () {
    createCanvas(626, 352)
    background(51)
    img = loadImage('bird.jpg')
}

function draw () {
  const randX = random(0, width)
  const randY = random(0,height)
  noStroke()
  const c = img.get(randX,randY)
  fill(c, 40)
  ellipse(randX, randY, 10, 10)
}
