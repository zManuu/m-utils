interface ILogEntry {
    msg: string;
    args: unknown[];
    timestamp: number;
    wasTimerActive: boolean;
}
interface ILoggerConfig {
    highlightColor: string;
    active: boolean;
    includeDates: boolean;
}
declare class Logger {
    private static resetColor;
    config: ILoggerConfig;
    history: ILogEntry[];
    constructor(config?: ILoggerConfig);
    log(msg: string, ...args: unknown[]): void;
}
export { ILogEntry, ILoggerConfig, Logger };
