class Vector2D {
    static zero = new Vector2D(0, 0);
    static left = new Vector2D(0, -1);
    static right = new Vector2D(0, 1);
    static up = new Vector2D(1, 0);
    static down = new Vector2D(-1, 0);
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    mul(factor) {
        this.x *= factor;
        this.y *= factor;
    }
}
export { Vector2D };
