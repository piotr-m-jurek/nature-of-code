import Vector from './Vector.js';
import { canvas, ctx } from './canvas.js';
var Mover = /** @class */ (function () {
    function Mover(mass) {
        if (mass === void 0) { mass = 10; }
        this.location = new Vector();
        this.velocity = new Vector();
        this.acceleration = new Vector();
        this.maxSpeed = 10;
        this.radius = mass * 2;
        this.mass = mass;
    }
    Mover.prototype.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.location.add(this.velocity);
    };
    Mover.prototype.randomize = function () {
        var random = new Vector(Math.random() * canvas.width, Math.random() * canvas.height);
        this.location.add(random);
    };
    Mover.prototype.followMouse = function (position) {
        position.normalize();
        position.mult(0.5);
        this.acceleration = position;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.location.add(this.velocity);
    };
    Mover.prototype.display = function () {
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.beginPath();
        ctx.ellipse(this.location.x, this.location.y, this.radius, this.radius, 0, 0, 360, false);
        ctx.fill();
        ctx.closePath();
    };
    Mover.prototype.checkEdges = function () {
        if (this.location.x > canvas.width) {
            this.location.x = 0;
        }
        else if (this.location.x < 0) {
            this.location.x = canvas.width;
        }
        if (this.location.y > canvas.height) {
            this.location.y = 0;
        }
        else if (this.location.y < 0) {
            this.location.y = canvas.height;
        }
    };
    Mover.prototype.bounce = function () {
        if (this.location.x > canvas.width - this.radius || this.location.x < 0 + this.radius) {
            this.velocity.x *= -1;
        }
        if (this.location.y > canvas.height - this.radius || this.location.y < 0 + this.radius) {
            this.velocity.y *= -1;
        }
    };
    Object.defineProperty(Mover.prototype, "setAcc", {
        set: function (_a) {
            var x = _a.x, y = _a.y;
            this.acceleration.x = x,
                this.acceleration.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Mover.prototype.applyForce = function (force) {
        var f = Vector.div(force, this.mass);
        this.acceleration.add(f);
    };
    return Mover;
}());
export default Mover;
//# sourceMappingURL=Mover.js.map