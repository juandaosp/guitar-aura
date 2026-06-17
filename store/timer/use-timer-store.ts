import { create } from 'zustand'
import { TimerMode, TimerState } from './types'

export const useTimerStore = create<TimerState>()((set, get) => ({
  minutes: null,
  seconds: null,
  mode: 'countdown' as TimerMode,
  isRunning: false,
  initialMinutes: 0,
  initialSeconds: 0,

  setMinutes: (min: number | null) => {
    set({ minutes: min })
  },

  setSeconds: (sec: number | null) => {
    set({ seconds: sec })
  },

  setMode: (mode: TimerMode) => {
    set({ mode })
  },

  startTimer: () => {
    const { isRunning, minutes, seconds, mode } = get()
    if (isRunning) return
    if (mode === 'countdown') {
      if ((minutes ?? 0) === 0 && (seconds ?? 0) === 0) return
      set({
        initialMinutes: minutes ?? 0,
        initialSeconds: seconds ?? 0,
        isRunning: true,
      })
    } else {
      set({ isRunning: true })
    }
  },

  pauseTimer: () => {
    set({ isRunning: false })
  },

  resetTimer: () => {
    const { mode, initialMinutes, initialSeconds } = get()
    if (mode === 'countdown') {
      set({
        minutes: initialMinutes,
        seconds: initialSeconds,
        isRunning: false,
      })
    } else {
      set({
        minutes: 0,
        seconds: 0,
        isRunning: false,
      })
    }
  },

  tick: () => {
    const { mode, minutes, seconds } = get()

    const currentMin = minutes ?? 0
    const currentSec = seconds ?? 0

    if (mode === 'countdown') {
      if (currentMin === 0 && currentSec === 0) {
        set({ isRunning: false })
        return
      }
      if (currentSec === 0) {
        set({
          minutes: currentMin - 1,
          seconds: 59,
        })
      } else {
        set({ seconds: currentSec - 1 })
      }
    } else {
      if (currentSec === 59) {
        set({
          minutes: currentMin + 1,
          seconds: 0,
        })
      } else {
        set({ seconds: currentSec + 1 })
      }
    }
  },
}))
