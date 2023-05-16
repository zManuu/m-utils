type Callback = () => void;
declare class Timer {
    private timer;
    private isPaused;
    private callback;
    private timeout;
    constructor(callback: Callback, timeout: number, delay?: number);
    start(): void;
    stop(): void;
}
export { Callback, Timer };
