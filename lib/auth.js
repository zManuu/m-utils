class Authenticator {
    sessions = new Map();
    isAuthenticated(key) {
        return this.sessions.has(key);
    }
    authenticate(key, mapping) {
        if (this.isAuthenticated(key))
            return;
        this.sessions.set(key, mapping);
    }
    removeAuth(key) {
        if (!this.isAuthenticated(key))
            return;
        this.sessions.delete(key);
    }
    getMapping(key) {
        if (!this.isAuthenticated(key))
            return undefined;
        return this.sessions.get(key);
    }
}
export { Authenticator };
