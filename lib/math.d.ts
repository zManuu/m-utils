declare class Vector2D {
    static zero: Vector2D;
    static left: Vector2D;
    static right: Vector2D;
    static up: Vector2D;
    static down: Vector2D;
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(other: Vector2D): void;
    substract(other: Vector2D): void;
    multiply(factor: number): void;
    getLength(): number;
}
type SimpleVector3D = {
    x: number;
    y: number;
    z: number;
};
declare class Vector3D implements SimpleVector3D {
    static zero: Vector3D;
    static up: Vector3D;
    static down: Vector3D;
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    add(other: Vector3D): void;
    substract(other: Vector3D): void;
    /**
     * Multiplies x, y, z by the given factor
     */
    multiply(factor: number): void;
    /**
     * @returns the length of this instance with the theorem of pytagoras
     */
    getLength(): number;
    /**
     * Creates a vector connecting 2 vectors with another.
     * Example: A(0, 0, -1), B(0, 1, 1). CV(A, B) = (0, 1, 2)
     * @param other the second vector
     * @returns the vector going from this instance to the passed position
     */
    getConnection(other: Vector3D): Vector3D;
    /**
     * Mainly used to calculate distances between point-vectors.
     * @param other the second vector
     * @returns the distance between two vectors
     */
    distance(other: Vector3D): number;
    /**
     * Mainly used for direction-vectors.
     * @returns A vector that is orthogonal to this instance
     */
    getOrthogonal(): Vector3D;
    /**
     * Mainly used for direction-vectors.
     * @returns A vector that is orthogonal to this instance and other
     */
    getCrossProduct(other: Vector3D): Vector3D;
    /**
     * Mainly used for direction-vectors.
     * @returns wether or not two vectors are othogonal
     */
    isOrthogonal(other: Vector3D): boolean;
    /**
     * Can be called with any Vector3D implementation that has props x, y and z.
     */
    static safeDistance(a: SimpleVector3D, b: SimpleVector3D): number;
}
export { Vector2D, Vector3D };
