declare function v<T>(): T;
declare class EventEmitter<T> {
    private listeners;
    emit<U extends keyof T>(key: U, args: T[U]): void;
    on<U extends keyof T>(key: U, fn: (args: T[U]) => void): void;
}
export { v, EventEmitter };
