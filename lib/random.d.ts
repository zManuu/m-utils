import { Vector2D, Vector3D } from './math.js';
/**
 * @param characters all allowed characters in the string. Defaults to 0-9, a-z, A-Z
 */
declare function string(length: number, characters?: string[]): string;
declare function number(max: number, min?: number): number;
declare function date(max?: number, min?: number): Date;
declare function vector2D(minX?: number, maxX?: number, minY?: number, maxY?: number): Vector2D;
declare function vector3D(minX?: number, maxX?: number, minY?: number, maxY?: number, minZ?: number, maxZ?: number): Vector3D;
/**
 * @param vec the vector that should be randomized
 * @param radius randomizing (0, 0) with radius 5 => min: (-5, -5), max: (5, 5)
 */
declare function randomizeVector2D(vec: Vector2D, radius?: number): void;
/**
 * @param vec the vector that should be randomized
 * @param radius randomizing (0, 0, 0) with radius 5 => min: (-5, -5, -5), max: (5, 5, 5)
 */
declare function randomizeVector3D(vec: Vector3D, radius?: number): void;
/**
 * @returns one random entry from the passed array
 */
declare function pick(arr: unknown[]): unknown;
export { number, string, pick, date, vector2D, vector3D, randomizeVector2D, randomizeVector3D };
