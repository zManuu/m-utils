function v<T>() {
  return {} as T
}

class EventEmitter<T> {

  private listeners: Map<keyof T, Function[]> = new Map()

  emit<U extends keyof T>(key: U, args: T[U]) {
    this.listeners.get(key)?.forEach(e => e(args))
  }

  on<U extends keyof T>(key: U, fn: (args: T[U]) => void) {
    if (this.listeners.has(key))
      this.listeners.get(key).push(fn)
    else
      this.listeners.set(key, [ fn ])
  }

}

export {
  v,
  EventEmitter
}