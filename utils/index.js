import { canvas, ctx } from './canvas.js';
import Vector from './Vector.js';
export function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export function getMousePos(evt, canvas) {
    var rect = canvas != null
        ? canvas.getBoundingClientRect()
        : { left: 0, top: 0 };
    return new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
}
//# sourceMappingURL=index.js.map