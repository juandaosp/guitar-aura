import { create } from 'zustand'
import { TimerMode, TimerStatus, type TimerStore } from './types'

export const useTimerStore = create<TimerStore>((set) => ({
    mode: TimerMode.COUNTDOWN,
    status: TimerStatus.IDLE,
    timeInSeconds: 0,

    updateTime: (timeInSeconds: number) => set({ timeInSeconds }),
    updateMode: (mode: TimerMode) => set({ mode }),
    updateStatus: (status: TimerStatus) => set({ status })
}));