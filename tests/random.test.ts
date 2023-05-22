import { random, math } from '../lib/index'

describe('random', () => {

  test('basic', () => {
    expect(random.number(10)).toBeGreaterThanOrEqual(0)
    expect(random.number(10)).toBeLessThanOrEqual(10)
    expect(random.string(10).length).toBe(10)
  })

  test('vectors', ()  => {
    const vec2D = math.Vector2D.zero
    const vec3D = math.Vector3D.zero

    random.randomizeVector2D(vec2D, 3)
    expect(vec2D.x).toBeGreaterThanOrEqual(-3)
    expect(vec2D.x).toBeLessThanOrEqual(3)
    expect(vec2D.y).toBeGreaterThanOrEqual(-3)
    expect(vec2D.y).toBeLessThanOrEqual(3)

    random.randomizeVector3D(vec3D, 3)
    expect(vec3D.x).toBeGreaterThanOrEqual(-3)
    expect(vec3D.x).toBeLessThanOrEqual(3)
    expect(vec3D.y).toBeGreaterThanOrEqual(-3)
    expect(vec3D.y).toBeLessThanOrEqual(3)
    expect(vec3D.z).toBeGreaterThanOrEqual(-3)
    expect(vec3D.z).toBeLessThanOrEqual(3)
  })

})