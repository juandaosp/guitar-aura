'use client'

import { MinusCircle, PlusCircle, Save, Trash } from 'lucide-react'
import { useMusicStore } from '@/store/music/use-music-store'
import { Slider } from '@/components/ui/slider'
import { Button } from '../ui/button'

export const LogSession = () => {
  const {
    numberOfChanges,
    perceivedAccuracy,
    setNumberOfChanges,
    setPerceivedAccuracy,
  } = useMusicStore()

  const incrementChanges = () => setNumberOfChanges(numberOfChanges + 1)

  const decrementChanges = () => {
    if (numberOfChanges > 0) {
      setNumberOfChanges(numberOfChanges - 1)
    }
  }

  const handlePerceivedAccuracyChange = (value: number[]) => {
    setPerceivedAccuracy(value[0])
  }

  return (
    <section className="flex w-full flex-row flex-wrap items-center justify-center gap-9">
      <div className="bg-card/80 flex min-w-52 flex-col rounded-lg px-12 py-6">
        <span className="text-accent-foreground/60 mb-4 w-full text-center text-[10px] tracking-widest">
          TOTAL SHIFTS
        </span>
        {/* Shifts Panel */}
        <div className="flex items-center justify-start gap-4 lg:gap-6">
          {/* Increment Action Button */}
          <button
            onClick={decrementChanges}
            className="text-primary"
            aria-label="Decrement chord changes"
          >
            <MinusCircle />
          </button>
          {/* Counter Display */}
          <span className="text-secondary-foreground text-center font-mono text-6xl">
            {numberOfChanges}
          </span>

          {/* Decrement Action Button */}

          <button
            onClick={incrementChanges}
            className="text-primary"
            aria-label="Increment chord changes"
          >
            <PlusCircle />
          </button>
        </div>
      </div>
      {/* Perceived Accuracy Panel */}
      <div className="flex w-1/2 min-w-48 flex-col rounded-lg">
        <div className="flex w-full items-center justify-between">
          <span className="text-muted-foreground mb-4 w-full text-left text-xs tracking-wide">
            PERCEIVED ACCURACY
          </span>
          <span className="text-primary mb-4 w-full text-right text-xl font-bold">
            {perceivedAccuracy}%
          </span>
        </div>

        <Slider
          max={100}
          step={1}
          className="mx-auto w-full"
          value={[perceivedAccuracy]}
          onValueChange={handlePerceivedAccuracyChange}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          className="flex items-center justify-center gap-2 px-4 py-4.5"
          variant="default"
          size="lg"
        >
          <Save size={18} />
          <span className="text-md leading-none font-semibold">
            SAVE TO LOGS
          </span>
        </Button>
        <Button
          className="border-destructive/30 flex items-center justify-center gap-2 border px-4 py-4.5"
          variant="destructive"
          size="lg"
        >
          <Trash size={18} />
          <span className="text-md leading-none font-semibold">DISCARD</span>
        </Button>
      </div>
    </section>
  )
}
