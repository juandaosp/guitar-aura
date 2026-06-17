// components/sequence-display/timer-input.tsx
'use client'

import { Input } from '@/components/ui/input'
import { useTimerInput } from './use-timer-input'

interface TimerInputProps {
  value: number | null
  isDisabled: boolean
  setVal: (val: number | null) => void
}

export const TimerInput = ({ value, setVal, isDisabled }: TimerInputProps) => {
  const { inputRef, localValue, handleChange, handleBlur } = useTimerInput({
    globalValue: value,
    setGlobalValue: setVal,
  })

  return (
    <Input
      ref={inputRef}
      value={localValue}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={isDisabled}
      type="text"
      inputMode="numeric"
      className="text-primary placeholder:text-primary/60 flex h-12 w-16 items-center justify-center py-0 text-center text-4xl leading-none disabled:opacity-100 md:h-16 md:w-22 md:text-6xl xl:h-28 xl:w-34 xl:text-8xl"
      placeholder="00"
    />
  )
}
