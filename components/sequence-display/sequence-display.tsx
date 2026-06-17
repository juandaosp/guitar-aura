// components/sequence-display/sequence-display.tsx
'use client'

import { Sequence } from '@/components/sequence-display/sequence'
import { SequenceTimer } from '@/components/sequence-display/sequence-timer'
import { LogSession } from './log-session'
import { selectPopulatedSequence } from '@/store/music/selectors'
import { useMusicStore } from '@/store/music/use-music-store'
import { useShallow } from 'zustand/react/shallow'

export const SequenceDisplay = () => {
  const { isLogSessionActive } = useMusicStore()
  const sequence = useMusicStore(useShallow(selectPopulatedSequence))

  if (sequence.length < 2) {
    return null
  }

  return (
    <section className="bg-card/60 dark:border-accent border-accent-foreground/20 relative flex flex-col items-center justify-center gap-6 rounded-lg border p-6">
      <svg
        className="absolute top-1/3 right-0 opacity-10"
        width="288"
        height="124"
        viewBox="0 0 288 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 54.5927C47.8883 -17.2398 95.7767 -17.2398 143.665 54.5927C191.553 126.425 239.442 126.425 287.33 54.5927"
          stroke="#A0D800"
          strokeWidth="1.43665"
        />
        <path
          d="M0 68.8474C47.8883 -2.9851 95.7767 -2.9851 143.665 68.8474C191.553 140.68 239.442 140.68 287.33 68.8474"
          stroke="#A0D800"
          strokeWidth="0.718325"
        />
      </svg>

      {!isLogSessionActive ? (
        <>
          <h2 className="text-primary font-mono text-[10px] tracking-[4px]">
            ACTIVE SEQUENCE
          </h2>
          <Sequence sequence={sequence} />
          <SequenceTimer />
        </>
      ) : (
        <>
          <Sequence sequence={sequence} />
          <LogSession />
        </>
      )}
    </section>
  )
}
