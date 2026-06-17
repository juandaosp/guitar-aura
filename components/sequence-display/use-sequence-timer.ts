'use client'

import { useEffect, useRef } from 'react'
import { useTimerStore } from '@/store/timer/use-timer-store'

export const useSequenceTimer = () => {
  const {
    minutes,
    seconds,
    mode,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    setMode,
  } = useTimerStore()

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        useTimerStore.getState().tick()
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  return {
    minutes,
    seconds,
    activeMode: mode,
    isStopwatch: mode === 'stopwatch',
    isRunning,
    toggleTimer: isRunning ? pauseTimer : startTimer,
    resetTimer,
    handleModeChange: setMode,
  }
}
