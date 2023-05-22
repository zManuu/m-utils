class Authenticator<T, U = number> {

  private sessions: Map<T, U> = new Map()

  isAuthenticated(key: T) {
    return this.sessions.has(key)
  }

  authenticate(key: T, mapping: U) {
    if (this.isAuthenticated(key))
      return console.warn(`Tried to authenticate ${key}, but they are authenticated already.`)

    this.sessions.set(key, mapping)
    console.log(`Successfully authenticated ${key} with mapping ${mapping}.`)
  }

  removeAuth(key: T) {
    if (!this.isAuthenticated(key)) {
      console.warn(`Tried to remove auth of ${key}, but isn't authenticated.`)
      return
    }

    if (this.sessions.delete(key))
      console.log(`Successfully removed auth from ${key}.`)
    else
      console.warn(`Couldn't remove auth from ${key}.`)
  }

  getMapping(key: T) {
    if (!this.isAuthenticated(key)) {
      console.warn(`Tried to get the mapping of ${key}, but isn't authenticated.`)
      return
    }

    return this.sessions.get(key)
  }

}

export {
  Authenticator
}