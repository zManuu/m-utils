type Callback = () => void

async function wait(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

class Timer {

  private timer: NodeJS.Timer
  private isPaused: boolean
  private callback: Callback
  private timeout: number

  constructor(callback: Callback, timeout: number, delay = 0) {
    this.callback = callback
    this.timeout = timeout
    this.isPaused = true

    setTimeout(this.start, delay)
  }

  start() {
    if (!this.isPaused || this.timer) {
      console.warn('Tried to start timer although running already.')
      return
    }

    this.timer = setInterval(this.callback, this.timeout)
    this.isPaused = false

    console.log('Timer was started.')
  }

  stop() {
    if (this.isPaused || !this.timer) {
      console.warn('Tried to stop timer although stopped already.')
      return
    }

    clearInterval(this.timer)
    this.timer = undefined
    this.isPaused = true

    console.log('Timer was stopped.')
  }

}

export {
  Callback,
  Timer,
  wait
}