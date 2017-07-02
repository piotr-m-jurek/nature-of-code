let xParam, yParam, clear, xp, yp
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
    xp = createP(xParam.value())
    xp.position(310, 10)
    yp = createP(yParam.value())
    yp.position(310, 30)
}

function draw () {
  stroke(255)
  strokeWeight(3)
  translate(width / 2, height / 2)
  point(x(t,xParam.value()), y(t,yParam.value()))
  t += 0.5
}

function x(param, mod) {
  return sin(param / mod) * 100 + sin(param / 10) * 10
}

function y(param, mod) {
  return cos(param / mod) * 100
}

function clearBg () {
  background(51)
}
