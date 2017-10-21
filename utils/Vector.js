export default class Vector {
    constructor(x = 0, y = 0) {
        this.x = x,
            this.y = y;
    }
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static sub(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    static mult(v, param) {
        return new Vector(v.x * param, v.y * param);
    }
    static div(v, param) {
        return new Vector(v.x / param, v.y / param);
    }
    add({ x, y }) {
        this.x += x,
            this.y += y;
    }
    subtract({ x, y }) {
        this.x -= x;
        this.y -= y;
    }
    mag() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    mult(num) {
        this.x *= num;
        this.y *= num;
    }
    div(num) {
        this.x /= num;
        this.y /= num;
    }
    normalize() {
        const m = this.mag();
        if (m != 0) {
            this.div(m);
        }
    }
    limit(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    }
    set coords({ x, y }) {
        this.x = x;
        this.y = y;
    }
}
//# sourceMappingURL=Vector.js.map