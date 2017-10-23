import { canvas } from '../utils/canvas.js';
import Vector from '../utils/Vector.js';
import { getMousePos, clearBackground } from '../utils/index.js';
import Mover from '../utils/Mover.js';
var mouse = new Vector();
document.addEventListener('mousemove', function (e) {
    mouse.coords = getMousePos(e, canvas);
});
var ball = new Mover();
var balls = [];
for (var i = 0; i < 10; i++) {
    var m = new Mover(10);
    m.randomize();
    balls.push(m);
}
function draw() {
    clearBackground();
    balls.forEach(function (ball) {
        ball.followMouse(mouse);
        ball.checkEdges();
        ball.display();
    });
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
//# sourceMappingURL=index.js.map