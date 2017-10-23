import { canvas, ctx } from './canvas.js'
import Vector from './Vector.js'

export function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export function getMousePos(evt: any, canvas: HTMLCanvasElement) {
    const rect = canvas != null
        ? canvas.getBoundingClientRect()
        : {left: 0, top: 0}
    return new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
}
