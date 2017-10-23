import { canvas } from '../utils/canvas.js';
import Vector from '../utils/Vector.js';
import { getMousePos, clearBackground } from '../utils/index.js';
import Mover from '../utils/Mover.js';
var mouse = new Vector();
document.addEventListener('mousemove', function (e) {
    mouse.coords = getMousePos(e, canvas);
});
var m = new Mover(10);
var movers = [];
for (var i = 0; i < 10; i++) {
    var m_1 = new Mover(Math.floor((Math.random() * 15) + 1));
    m_1.acceleration.y = 0.01;
    m_1.randomize();
    movers.push(m_1);
}
function draw() {
    clearBackground();
    movers.forEach(function (m) {
        m.applyForce(new Vector(Math.random() % 0.1 - 0.05, 0));
        m.bounce();
        m.update();
        m.display();
    });
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
//# sourceMappingURL=index.js.map