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
    substract(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    multiply(factor) {
        this.x *= factor;
        this.y *= factor;
    }
    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
class Vector3D {
    static zero = new Vector3D(0, 0, 0);
    static up = new Vector3D(0, 0, 1);
    static down = new Vector3D(0, 0, -11);
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;
    }
    substract(other) {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;
    }
    /**
     * Multiplies x, y, z by the given factor
     */
    multiply(factor) {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
    }
    /**
     * @returns the length of this instance with the theorem of pytagoras
     */
    getLength() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }
    /**
     * Creates a vector connecting 2 vectors with another.
     * Example: A(0, 0, -1), B(0, 1, 1). CV(A, B) = (0, 1, 2)
     * @param other the second vector
     * @returns the vector going from this instance to the passed position
     */
    getConnection(other) {
        return new Vector3D(Math.abs(other.x - this.x), Math.abs(other.y - this.y), Math.abs(other.z - this.z));
    }
    /**
     * Mainly used to calculate distances between point-vectors.
     * @param other the second vector
     * @returns the distance between two vectors
     */
    distance(other) {
        return this.getConnection(other).getLength();
    }
    /**
     * Mainly used for direction-vectors.
     * @returns A vector that is orthogonal to this instance
     */
    getOrthogonal() {
        return new Vector3D(this.x * -1, this.z, this.y);
    }
    /**
     * Mainly used for direction-vectors.
     * @returns A vector that is orthogonal to this instance and other
     */
    getCrossProduct(other) {
        return new Vector3D(this.y * other.z - other.y * this.z, (this.x * other.z - other.x * this.z) * -1, this.x * other.y - other.x * this.y);
    }
    /**
     * Mainly used for direction-vectors.
     * @returns wether or not two vectors are othogonal
     */
    isOrthogonal(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z === 0;
    }
    /**
     * Can be called with any Vector3D implementation that has props x, y and z.
     */
    static safeDistance(a, b) {
        const connecting = {
            x: Math.abs(a.x - b.x),
            y: Math.abs(a.y - b.y),
            z: Math.abs(a.z - b.z)
        };
        return Math.sqrt((connecting.x * connecting.x) + (connecting.y * connecting.y) + (connecting.z * connecting.z));
    }
}
export { Vector2D, Vector3D };
