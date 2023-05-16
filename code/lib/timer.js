class Timer {
    timer;
    isPaused;
    callback;
    timeout;
    constructor(callback, timeout, delay = 0) {
        this.callback = callback;
        this.timeout = timeout;
        this.isPaused = false;
        setTimeout(this.start, delay);
    }
    start() {
        if (!this.isPaused || this.timer) {
            console.warn('Tried to start timer although running already.');
            return;
        }
        this.timer = setInterval(this.callback, this.timeout);
        this.isPaused = false;
        console.log('Timer was started.');
    }
    stop() {
        if (this.isPaused || !this.timer) {
            console.warn('Tried to stop timer although stopped already.');
            return;
        }
        clearInterval(this.timer);
        this.timer = undefined;
        this.isPaused = true;
        console.log('Timer was stopped.');
    }
}
export { Timer };
