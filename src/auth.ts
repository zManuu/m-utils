class Authenticator<T, U = number> {

  private sessions: Map<T, U> = new Map()

  isAuthenticated(key: T) {
    return this.sessions.has(key)
  }

  authenticate(key: T, mapping: U) {
    if (this.isAuthenticated(key))
      return

    this.sessions.set(key, mapping)
  }

  removeAuth(key: T) {
    if (!this.isAuthenticated(key))
      return

    this.sessions.delete(key)
  }

  getMapping(key: T) {
    if (!this.isAuthenticated(key))
      return undefined

    return this.sessions.get(key)
  }

}

export {
  Authenticator
}