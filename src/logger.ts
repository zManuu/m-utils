interface ILogEntry {
  msg: string
  args: unknown[]
  timestamp: number
  wasTimerActive: boolean
}

interface ILoggerConfig {
  highlightColor: string
  active: boolean
  includeDates: boolean
}

class Logger {

  private static resetColor = '\u001b[0m'

  config: ILoggerConfig
  history: ILogEntry[]

  constructor(config: ILoggerConfig = {
    highlightColor: '\u001b[1;36m',
    active: true,
    includeDates: true
  }) {
    this.config = config
    this.history = []
  }

  log(msg: string, ...args: unknown[]) {

    const timestamp = Date.now()
    const dateString = new Date(timestamp).toTimeString()

    if (this.config.includeDates)
      msg = `${dateString}${msg}`

    for (let i=0; i<args.length; i++) {
      msg = msg.replaceAll(
        `$${i}`,
        `${this.config.highlightColor}${args[i].toString()}${Logger.resetColor}`
      )
    }
    
    this.history.push({
      wasTimerActive: this.config.active,
      args,
      msg,
      timestamp
    })

    if (this.config.active)
      console.log(msg)
  }

}

export {
  ILogEntry,
  ILoggerConfig,
  Logger
}