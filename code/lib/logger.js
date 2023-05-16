class Logger {
    static resetColor = '\u001b[0m';
    config;
    history;
    constructor(config = {
        highlightColor: '\u001b[1;36m',
        active: true,
        includeDates: true
    }) {
        this.config = config;
        this.history = [];
    }
    log(msg, ...args) {
        const timestamp = Date.now();
        const dateString = new Date(timestamp).toTimeString();
        if (this.config.includeDates)
            msg = `${dateString}${msg}`;
        for (let i = 0; i < args.length; i++) {
            msg = msg.replaceAll(`$${i}`, `${this.config.highlightColor}${args[i].toString()}${Logger.resetColor}`);
        }
        this.history.push({
            wasTimerActive: this.config.active,
            args,
            msg,
            timestamp
        });
        if (this.config.active)
            console.log(msg);
    }
}
export { Logger };
