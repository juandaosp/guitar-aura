// components/sequence-display/sequence-timer.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Logs, Play, SquareX } from 'lucide-react'
import { TimerInput } from './timer-input'
import { useSequenceTimer } from './use-sequence-timer'
import { useTimerStore } from '@/store/timer/use-timer-store'
import { useMusicStore } from '@/store/music/use-music-store'
import { ModeSwitch } from './mode-switch'

export const SequenceTimer = () => {
  const { toggleIsLogSessionActive } = useMusicStore()

  const {
    minutes,
    seconds,
    activeMode,
    isStopwatch,
    isRunning,
    toggleTimer,
    resetTimer,
    handleModeChange,
  } = useSequenceTimer()

  const setMinutes = useTimerStore((state) => state.setMinutes)
  const setSeconds = useTimerStore((state) => state.setSeconds)
  const isTimerEmpty = (minutes ?? 0) === 0 && (seconds ?? 0) === 0
  const hasSessionStarted = useTimerStore(
    (state) =>
      (state.initialMinutes ?? 0) > 0 || (state.initialSeconds ?? 0) > 0,
  )

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      {/* 🧭 Mode Switch Panel */}
      <ul className="flex w-full items-center justify-center gap-10 select-none">
        <ModeSwitch
          mode="countdown"
          isActive={activeMode === 'countdown'}
          onClick={() => handleModeChange('countdown')}
        />
        <ModeSwitch
          mode="stopwatch"
          isActive={activeMode === 'stopwatch'}
          onClick={() => handleModeChange('stopwatch')}
        />
      </ul>

      {/* 🔢 Digital Time Input Boxes */}
      <div
        className={`flex w-full items-center justify-center gap-1 p-4 transition-opacity duration-300 lg:w-1/3 ${
          isStopwatch ? 'pointer-events-none opacity-60' : 'opacity-100'
        }`}
      >
        {/* Disabling inputs when running directly preserves timer synchronization */}
        <TimerInput
          value={minutes}
          setVal={setMinutes}
          isDisabled={isRunning}
        />
        <span className="text-primary/60 font-heading flex items-center justify-center text-xl">
          :
        </span>
        <TimerInput
          value={seconds}
          setVal={setSeconds}
          isDisabled={isRunning}
        />
      </div>

      {/* 🎛️ Dynamic Controller Actions */}
      <div className="flex items-center justify-center gap-2">
        <Button
          className="flex items-center justify-center gap-2 rounded-xl px-2 py-4.5"
          variant={isRunning ? 'destructive' : 'default'}
          size="lg"
          disabled={activeMode === 'countdown' && isTimerEmpty && !isRunning}
          onClick={toggleTimer}
        >
          {isRunning ? (
            <>
              <SquareX size={16} />
              <span>Stop Session</span>
            </>
          ) : (
            <>
              <Play fill="currentColor" size={16} />
              <span className="hidden text-sm font-semibold md:block">
                {hasSessionStarted ? 'Continue' : 'Start'} Session
              </span>
            </>
          )}
        </Button>

        {/* Action Panel accessible when pausing a running practice session */}
        {!isRunning && hasSessionStarted && (
          <>
            <Button
              className="flex items-center justify-center gap-2 rounded-xl px-2 py-4.5"
              variant="destructive"
              size="lg"
              onClick={resetTimer}
            >
              <SquareX size={16} />
              <span className="hidden text-sm font-semibold md:block">
                Clean Timer
              </span>
            </Button>

            <Button
              className="flex items-center justify-center gap-2 rounded-xl px-2 py-4.5"
              variant="outline"
              size="lg"
              onClick={toggleIsLogSessionActive}
            >
              <Logs fill="currentColor" size={16} />
              <span className="hidden text-sm font-semibold md:block">
                Log Results
              </span>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
