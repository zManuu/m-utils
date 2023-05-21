function v() {
    return {};
}
class EventEmitter {
    listeners = new Map();
    emit(key, args) {
        this.listeners.get(key)?.forEach(e => e(args));
    }
    on(key, fn) {
        if (this.listeners.has(key))
            this.listeners.get(key).push(fn);
        else
            this.listeners.set(key, [fn]);
    }
}
export { v, EventEmitter };
