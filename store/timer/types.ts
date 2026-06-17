export type TimerMode = 'countdown' | 'stopwatch'

export interface TimerState {
  // Core state
  minutes: number | null
  seconds: number | null
  mode: TimerMode
  isRunning: boolean
  initialMinutes: number | null
  initialSeconds: number | null

  // Actions
  setMinutes: (min: number | null) => void
  setSeconds: (sec: number | null) => void
  setMode: (mode: TimerMode) => void
  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void
  tick: () => void
}
