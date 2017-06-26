// class Walker {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }

//   display () {
//     stroke(255)
//     ellipse(this.x, this.y, 10, 10)
//   }
//   step () {
//     const stepx = random(-1, 1)
//     const stepy = random(-1, 1)
//     this.x += stepx
//     this.y += stepy
//   }
// }


function setup () {
  createCanvas(800,600)

}
var T = 0

function draw() {
  blendMode(BLEND)
  background(0)
  blendMode(ADD)
  T += 0.1
  drawPixels(30, T)
}

const noiseScale = 1
const sizeScale = 0.1
const freqBuf = new Uint8Array(32)

function drawPixels(scale, T) {
  analyser.getByteFrequencyData(freqBuf)
  const ampR = Math.max(0, map(freqBuf[2], 32, 255, 0, 1))
  const ampG = Math.max(0, map(freqBuf[10], 32, 255, 0, 1))
  const ampB = Math.max(0, map(freqBuf[13], 32, 255, 0, 1))

  translate(scale/2,scale/2)
  for (let i = 0; i < height / scale; i++) {
    for (let j = 0; j < width / scale; j++) {
      var noiseValR = noise(i * noiseScale, j * noiseScale, T)
      var noiseValG = noise((i + 10000) * noiseScale, j * noiseScale, T)
      var noiseValB = noise((i + 20000) * noiseScale, j * noiseScale, T)
      var sizeR =  noiseValR * scale * ampR
      var sizeG =  noiseValG * scale * ampG
      var sizeB =  noiseValB * scale * ampB
      var offsetR = sizeR/2
      var offsetG = sizeG/2
      var offsetB = sizeB/2
      var radius = 0.3
      fill(255, 0, 0)
      rect(j*scale - offsetR,i*scale - offsetR,sizeR, sizeR, radius * sizeR)
      fill(0, 255, 0)
      rect(j*scale - offsetG,i*scale - offsetG,sizeG, sizeG, radius * sizeG)
      fill(0, 0, 255)
      rect(j*scale - offsetB,i*scale - offsetB,sizeB, sizeB, radius * sizeB)
    }
  }
}

const audioCtx = new AudioContext()
const analyser = audioCtx.createAnalyser()
analyser.fftSize = 32
analyser.smoothingTimeConstant = 0.1

navigator.getUserMedia({audio: true}, stream => {
  const source = audioCtx.createMediaStreamSource(stream)
  source.connect(analyser)
}, err => console.error(err))