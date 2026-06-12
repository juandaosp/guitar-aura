"use client";

import { Chord } from "@/components/music/chord";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, Trash2 } from "lucide-react";
import { useLoopSequenceManager } from "./use-loop-sequence";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PopulatedSequenceStep, selectPopulatedSequence } from "@/store/music/selectors";
import { useMusicStore } from "@/store/music/use-music-store";
import { useShallow } from "zustand/react/shallow";

export const LoopSequence = () => {
  const sequence = useMusicStore(useShallow(selectPopulatedSequence));

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
  } = useLoopSequenceManager(sequence);

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-sans font-bold text-2xl text-accent dark:text-accent-foreground">
          Loop Sequence
          
        </h2>

        {!isSequenceEmpty && (
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-zinc-400 hover:text-destructive hover:bg-destructive/10 gap-2 rounded-lg"
            onClick={clearSequence}
          >
            <Trash2 size={14} /> Clear Loop
          </Button>
        )}
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-6">
        {sequence.map((step: PopulatedSequenceStep, index) => (
          <Chord
            key={`${step.id}`}
            sequenceStep={step}
            chord={step}
            selectedVoicing={step.selectedVoicing}
            remove={removeChordFromSequence}
          />
        ))}
        {!isSequenceFull ?
          (
            <Drawer open={isOpen} onOpenChange={handleOpenChange}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="lg" className="flex flex-col justify-center items-center bg-card/40 rounded-xl border-dashed border-accent w-40 h-36">
                  <span className="text-xs text-muted dark:text-muted-foreground tracking-tight mb-1">ADD CHORD</span>
                  <Plus size={20} className="text-muted dark:text-muted-foreground" />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="bg-zinc-950 border-zinc-800 text-white max-h-[85vh]">
                <div className="mx-auto w-full max-w-xl pb-6">
                  <DrawerHeader>
                    <DrawerTitle className="text-lg font-bold text-lime-400">Configure Chord Step</DrawerTitle>
                    <DrawerDescription className="text-xs text-zinc-400">1. Select root ➔ 2. Choose voicing.</DrawerDescription>
                  </DrawerHeader>

                  <div className="p-4 flex flex-col gap-6">

                    <div>
                      <label className="text-xs font-semibold uppercase text-zinc-500 block mb-3">Step 1: Root Chord</label>
                      <div className="grid grid-cols-4 gap-2.5 max-h-44 overflow-y-auto pr-1">
                        {availableChords.map((chord) => (
                          <Button
                            key={chord.id}
                            variant="secondary"
                            className={`h-14 flex flex-col rounded-xl border ${chord.id === selectedChordId ? "bg-lime-500/10 border-lime-500 text-lime-400 font-black" : "bg-zinc-900 border-zinc-800"}`}
                            onClick={() => setSelectedChordId(chord.id)}
                          >
                            <span className="text-base">{chord.name}</span>
                            <span className="text-[9px] opacity-60 uppercase">{chord.quality}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className={`transition-all ${selectedChordId ? "opacity-100" : "opacity-30 pointer-events-none"}`}>
                      <label className="text-xs font-semibold uppercase text-zinc-500 mb-3 flex items-center gap-1.5">
                        Step 2: Select Voicing {selectedChordId && <ArrowRight size={12} className="text-lime-500" />}
                      </label>

                      {selectedChordId ? (
                        <div className="grid grid-cols-2 gap-3">
                          {currentVoicings.map((voicing) => (
                            <Button
                              key={voicing.id}
                              variant="outline"
                              className="h-16 flex flex-col justify-center items-start px-4 rounded-xl bg-zinc-900/50 border-zinc-800 hover:border-lime-500 text-left group"
                              onClick={() => handleSelectVoicing(voicing.id)}
                            >
                              <span className="text-sm font-bold group-hover:text-lime-400">{voicing.name}</span>
                              <span className="text-xs text-zinc-500 mt-0.5">Fret {voicing.baseFret} • Diff: {"★".repeat(voicing.difficulty)}</span>
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="h-16 border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-xs text-zinc-600 italic bg-zinc-900/20">
                          Select a root chord above to unlock position variants
                        </div>
                      )}
                    </div>
                  </div>

                  <DrawerFooter className="border-t border-zinc-900 px-4 pt-4 mt-2">
                    <DrawerClose asChild>
                      <Button variant="outline" className="border-zinc-800 text-zinc-400 w-full">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          ) :
          (
            <div className="w-40 h-36 flex flex-col justify-center items-center bg-background rounded-xl border border-destructive">
              <span className="text-sm dark:text-destructive font-semibold text-center">Max 4 Chords</span>
              <span className="text-xs text-destructive-foreground mt-1 text-center">Remove a chord to add more</span>
            </div>
          )
        }

      </div>
    </section>
  );
}