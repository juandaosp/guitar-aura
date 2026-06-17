import { type StateCreator } from 'zustand'
import { LoopSequenceState, MusicStore } from './types'

export const loopSequenceSlice: StateCreator<
  MusicStore,
  [],
  [],
  LoopSequenceState
> = (set, get) => ({
  sequence: [],
  activeIndex: null,
  bpm: 120,
  isLogSessionActive: false,
  numberOfChanges: 0,
  perceivedAccuracy: 0,

  addChordToSequence: (chordId: string, voicingId?: string) =>
    set((state) => {
      const selectedVoicing =
        voicingId ?? get().voicings.find((v) => chordId === v.chordId)?.id
      return {
        sequence: [
          ...state.sequence,
          {
            id: crypto.randomUUID(),
            chordId,
            voicingId: selectedVoicing || '',
          },
        ],
      }
    }),

  removeChordFromSequence: (itemId: string) =>
    set((state: MusicStore) => {
      const filteredSequence = state.sequence.filter(
        (item) => item.id !== itemId,
      )
      return { sequence: filteredSequence }
    }),

  updateVoicingInStep: (itemId: string, newVoicingId: string) =>
    set((state) => ({
      sequence: state.sequence.map((item) =>
        item.id === itemId ? { ...item, voicingId: newVoicingId } : item,
      ),
    })),

  clearSequence: () => set({ sequence: [], activeIndex: null }),

  reorderSequence: (startIndex: number, endIndex: number) =>
    set((state) => {
      const sequence = [...state.sequence]
      const [removed] = sequence.splice(startIndex, 1)
      sequence.splice(endIndex, 0, removed)
      return { sequence }
    }),

  setBPM: (bpm: number) => set({ bpm }),

  toggleIsLogSessionActive: () =>
    set((state) => ({ isLogSessionActive: !state.isLogSessionActive })),

  setNumberOfChanges: (changes: number) => {
    set({ numberOfChanges: changes })
  },

  setPerceivedAccuracy: (accuracy: number): void => {
    set({ perceivedAccuracy: accuracy })
  },
})
