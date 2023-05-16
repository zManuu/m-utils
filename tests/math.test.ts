import { math } from '../lib/index'

describe('Math', () => {

  test('vector2d operations', () => {
    const v = new math.Vector2D(0, 0)
    expect(v).toEqual(math.Vector2D.zero)
    v.add(math.Vector2D.left)
    expect(v.len()).toBe(1)
    v.add(math.Vector2D.right)
    expect(v).toEqual(math.Vector2D.zero)
  })

})