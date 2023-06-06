import { math } from '../lib/index'

describe('Math', () => {

  test('vector2d operations', () => {
    const v = new math.Vector2D(0, 0)
    expect(v).toEqual(math.Vector2D.zero)
    v.add(math.Vector2D.left)
    expect(v.getLength()).toBe(1)
    v.add(math.Vector2D.right)
    expect(v).toEqual(math.Vector2D.zero)
  })

  test('vector3d operations', () => {
    const a = new math.Vector3D(5, 6, 2)
    const b = new math.Vector3D(6, 7, 1)

    expect(a.getConnection(b)).toEqual({ x: 1, y: 1, z: 1 })
    expect(a.getCrossProduct(b)).toEqual({ x: -8, y: 7, z: -1 })
    expect(a.getOrthogonal()).toEqual({ x: -5, y: 2, z: 6 })
    expect(a.isOrthogonal(b)).toBe(false)
    expect(math.Vector3D.safeDistance(a, b)).toBe(a.distance(b))
  })

})