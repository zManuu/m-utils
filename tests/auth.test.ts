import { auth } from '../lib/index'

describe('auth', () => {

  type WebToken = 'aaaa-bbbb-cccc-dddd'
  interface User { id: number, name: string }
  const testUser: User = { id: 1, name: 'test' }
  let authenticator: auth.Authenticator<WebToken, User>

  test('creation of Authenticator', () => {
    authenticator = new auth.Authenticator()
    expect(authenticator).toBeDefined()
  })

  test('operations', () => {
    expect(authenticator.isAuthenticated('aaaa-bbbb-cccc-dddd')).toBe(false)

    authenticator.authenticate('aaaa-bbbb-cccc-dddd', testUser)

    expect(authenticator.isAuthenticated('aaaa-bbbb-cccc-dddd')).toBe(true)
    expect(authenticator.getMapping('aaaa-bbbb-cccc-dddd')).toBe(testUser)
  })
})