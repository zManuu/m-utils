class Vector2D {

  public static zero = new Vector2D(0, 0)
  public static left = new Vector2D(0, -1)
  public static right = new Vector2D(0, 1)
  public static up = new Vector2D(1, 0)
  public static down = new Vector2D(-1, 0)

  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  add(other: Vector2D) {
    this.x += other.x
    this.y += other.y
  }

  sub(other: Vector2D) {
    this.x -= other.x
    this.y -= other.y
  }

  mul(factor: number) {
    this.x *= factor
    this.y *= factor
  }

  len() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

}

export {
  Vector2D
}