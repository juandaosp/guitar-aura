'use client'

import type { TimerMode } from '@/store/timer/types'

interface ModeSwitchProps {
  mode: TimerMode
  isActive: boolean
  onClick: () => void
}

export const ModeSwitch = ({ mode, isActive, onClick }: ModeSwitchProps) => {
  // ✅ Dynamically swap structural classes based on selection state
  const activeClass = isActive
    ? 'border-b-2 border-primary text-primary dark:text-primary font-bold'
    : 'text-muted-foreground/40 hover:text-muted-foreground/80 font-medium'

  return (
    <li
      className={`cursor-pointer pb-1.5 text-[11px] tracking-[2px] uppercase transition-all duration-200 ${activeClass}`}
      onClick={onClick}
    >
      {mode}
    </li>
  )
}
