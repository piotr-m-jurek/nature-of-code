const pSize = 10
function setup () {
    createCanvas(innerWidth, innerHeight)
    background(51)
    colorMode(HSB, 255)
}

function draw () {
  for(let i = 0; i < width / pSize; i++) {
    for(let j = 0; j < height / pSize; j++) {
      stroke(i + j % 255, 255, 255)
      rect(i*pSize, j*pSize, pSize, pSize)
      rect
    }
  }
}
