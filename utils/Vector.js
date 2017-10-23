var Vector = /** @class */ (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x,
            this.y = y;
    }
    Vector.add = function (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    };
    Vector.sub = function (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    };
    Vector.mult = function (v, param) {
        return new Vector(v.x * param, v.y * param);
    };
    Vector.div = function (v, param) {
        return new Vector(v.x / param, v.y / param);
    };
    Vector.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
    };
    Vector.prototype.subtract = function (v) {
        this.x -= v.x;
        this.y -= v.y;
    };
    Vector.prototype.mag = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    Vector.prototype.mult = function (num) {
        this.x *= num;
        this.y *= num;
    };
    Vector.prototype.div = function (num) {
        this.x /= num;
        this.y /= num;
    };
    Vector.prototype.normalize = function () {
        var m = this.mag();
        if (m != 0) {
            this.div(m);
        }
    };
    Vector.prototype.limit = function (max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    };
    Object.defineProperty(Vector.prototype, "coords", {
        set: function (_a) {
            var x = _a.x, y = _a.y;
            this.x = x;
            this.y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());
export default Vector;
//# sourceMappingURL=Vector.js.map