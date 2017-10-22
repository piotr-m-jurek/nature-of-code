export const canvas = <HTMLCanvasElement>document.createElement('canvas')
export const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.background = `rgb(51, 51, 51)`
