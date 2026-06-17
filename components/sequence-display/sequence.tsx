// components/sequence-display/sequence.tsx
'use client'

import { PopulatedSequenceStep } from '@/store/music/selectors'

interface SequenceProps {
  sequence: PopulatedSequenceStep[]
}

export const Sequence = ({ sequence }: SequenceProps) => {
  return (
    <section className="flex flex-wrap items-center justify-around gap-2">
      {/* ✅ Safe structural validation to avoid printing an accidental '0' onto the layout */}
      {sequence.length > 0 &&
        sequence.map((step: PopulatedSequenceStep, index: number) => {
          // ✅ Highly optimized terminal element position checking via pure index evaluation
          const isLastElement = index === sequence.length - 1

          return (
            <div
              key={step.id}
              className="flex items-center justify-center gap-2"
            >
              {/* ✅ Render the chord name directly from the iterated entity reference */}
              <span className="font-heading text-8xl">{step.name}</span>

              {/* Sequential visual horizontal divider spacer */}
              {!isLastElement && (
                <span className="dark:bg-muted-foreground bg-muted h-1.5 w-12 rounded-full"></span>
              )}
            </div>
          )
        })}
    </section>
  )
}
