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
    sub(other: Vector2D): void;
    mul(factor: number): void;
    len(): number;
}
export { Vector2D };
