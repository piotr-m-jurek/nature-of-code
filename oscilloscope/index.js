let xParam, yParam, clear
let t = 0
function setup () {
    createCanvas(640, 480)
    background(51)
    clear = createButton('clear')
    clear.position(0,0)
    clear.mousePressed(clearBg)

    xParam = createSlider(0,100,10,0.5)
    xParam.position(0,20)
    xParam.style('width', '300px')
    yParam = createSlider(0,100,10,0.5)
    yParam.position(0,40)
    yParam.style('width', '300px')
}

function draw () {
  stroke(255)
  strokeWeight(3)
  translate(width / 2, height / 2)
  const valX = x(t,xParam.value())
  const valY = y(t,yParam.value())
  point(valX, valY)
  t += 0.5
  console.log(`x ${xParam.value()}, y ${yParam.value()}`)
}

function x(param, mod) {
  return sin(param / 10) * 100 + sin(param / 10) * 10
}

function y(param, mod) {
  return sin(param / 20) * 100
}

function clearBg () {
  background(51)
}
