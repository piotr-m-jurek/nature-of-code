const LINES = 10
let T = 0
let slider
function setup () {
    createCanvas(640, 480)
    background(51)
    slider = createSlider(0, 500, 100, 1)
    slider.position(10,0)
    slider.style('width', '500px')
    console.log(slider)
}

function draw () {
  background(51)
  stroke(255)
  strokeWeight(6)
  translate(width / 2, height / 2)
  let v = slider.value()
  for (let i = 0; i < LINES; i++) {
    line(x1(T+i, v),y1(T+i, v),x2(T+i, v),y2(T+i, v))
  }
  T += 0.2
}

function x1(param, val) {
  return sin(param / 3) * val + sin(param / 10) * val
}

function y1(param, val) {
  return sin(param / 3) * val + sin(param / 10) * val
}
function x2(param, val) {
  return sin(param / 10) * val + sin(param / 50) * val
}

function y2(param, val) {
  return sin(param / 20) * val + sin(param / 5) * val
}
