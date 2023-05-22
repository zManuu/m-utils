declare class Authenticator<T, U = number> {
    private sessions;
    isAuthenticated(key: T): boolean;
    authenticate(key: T, mapping: U): void;
    removeAuth(key: T): void;
    getMapping(key: T): U;
}
export { Authenticator };
