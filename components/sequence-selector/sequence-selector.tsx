'use client'

import { Chord } from '@/components/music/chord'
import { Button } from '@/components/ui/button'
import { Plus, ArrowRight, Trash2 } from 'lucide-react'
import { useLoopSequenceManager } from './use-sequence-selector'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  PopulatedSequenceStep,
  selectPopulatedSequence,
} from '@/store/music/selectors'
import { useMusicStore } from '@/store/music/use-music-store'
import { useShallow } from 'zustand/react/shallow'

export const SequenceSelector = () => {
  const sequence = useMusicStore(useShallow(selectPopulatedSequence))

  const {
    isOpen,
    selectedChordId,
    availableChords,
    currentVoicings,
    isSequenceEmpty,
    isSequenceFull,
    setSelectedChordId,
    handleSelectVoicing,
    handleOpenChange,
    removeChordFromSequence,
    clearSequence,
  } = useLoopSequenceManager(sequence)

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-accent dark:text-accent-foreground font-sans text-2xl font-bold">
          Loop Sequence
        </h2>

        {!isSequenceEmpty && (
          <Button
            variant="ghost"
            size="sm"
            className="hover:text-destructive hover:bg-destructive/10 gap-2 rounded-lg text-xs text-zinc-400"
            onClick={clearSequence}
          >
            <Trash2 size={14} /> Clear Loop
          </Button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
        {sequence.map((step: PopulatedSequenceStep) => (
          <Chord
            key={step.id}
            chord={step}
            selectedVoicing={step.selectedVoicing}
            onRemove={() => removeChordFromSequence(step.id)}
          />
        ))}

        {!isSequenceFull ? (
          <Drawer open={isOpen} onOpenChange={handleOpenChange}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="bg-card/40 border-accent flex h-36 w-40 flex-col items-center justify-center rounded-xl border-dashed"
              >
                <span className="text-muted dark:text-muted-foreground mb-1 text-xs tracking-tight">
                  ADD CHORD
                </span>
                <Plus
                  size={20}
                  className="text-muted dark:text-muted-foreground"
                />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="max-h-[85vh] border-zinc-800 bg-zinc-950 text-white">
              <div className="mx-auto w-full max-w-xl pb-6">
                <DrawerHeader>
                  <DrawerTitle className="text-lg font-bold text-lime-400">
                    Configure Chord Step
                  </DrawerTitle>
                  <DrawerDescription className="text-xs text-zinc-400">
                    1. Select root ➔ 2. Choose voicing.
                  </DrawerDescription>
                </DrawerHeader>

                <div className="flex flex-col gap-6 p-4">
                  <div>
                    <label className="mb-3 block text-xs font-semibold text-zinc-500 uppercase">
                      Step 1: Root Chord
                    </label>
                    <div className="grid max-h-44 grid-cols-4 gap-2.5 overflow-y-auto pr-1">
                      {availableChords.map((chord) => (
                        <Button
                          key={chord.id}
                          variant="secondary"
                          className={`flex h-14 flex-col rounded-xl border ${chord.id === selectedChordId ? 'border-lime-500 bg-lime-500/10 font-black text-lime-400' : 'border-zinc-800 bg-zinc-900'}`}
                          onClick={() => setSelectedChordId(chord.id)}
                        >
                          <span className="text-base">{chord.name}</span>
                          <span className="text-[9px] uppercase opacity-60">
                            {chord.quality}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`transition-all ${selectedChordId ? 'opacity-100' : 'pointer-events-none opacity-30'}`}
                  >
                    <label className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase">
                      Step 2: Select Voicing{' '}
                      {selectedChordId && (
                        <ArrowRight size={12} className="text-lime-500" />
                      )}
                    </label>

                    {selectedChordId ? (
                      <div className="grid grid-cols-2 gap-3">
                        {currentVoicings.map((voicing) => (
                          <Button
                            key={voicing.id}
                            variant="outline"
                            className="group flex h-16 flex-col items-start justify-center rounded-xl border-zinc-800 bg-zinc-900/50 px-4 text-left hover:border-lime-500"
                            onClick={() => handleSelectVoicing(voicing.id)}
                          >
                            <span className="text-sm font-bold group-hover:text-lime-400">
                              {voicing.name}
                            </span>
                            <span className="mt-0.5 text-xs text-zinc-500">
                              Fret {voicing.baseFret} • Diff:{' '}
                              {'★'.repeat(voicing.difficulty)}
                            </span>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/20 text-xs text-zinc-600 italic">
                        Select a root chord above to unlock position variants
                      </div>
                    )}
                  </div>
                </div>

                <DrawerFooter className="mt-2 border-t border-zinc-900 px-4 pt-4">
                  <DrawerClose asChild>
                    <Button
                      variant="outline"
                      className="w-full border-zinc-800 text-zinc-400"
                    >
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <div className="bg-background border-destructive flex h-36 w-40 flex-col items-center justify-center rounded-xl border">
            <span className="dark:text-destructive text-center text-sm font-semibold">
              Max 4 Chords
            </span>
            <span className="text-destructive-foreground mt-1 text-center text-xs">
              Remove a chord to add more
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
