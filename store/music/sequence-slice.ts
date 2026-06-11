import { type StateCreator } from 'zustand'
import { LoopSequenceState, MusicStore } from './types';



export const loopSequenceSlice: StateCreator<MusicStore, [], [], LoopSequenceState> = (set, get) => ({
    sequence: [],
    activeIndex: null,
    bpm: 120,
    isPlaying: false,
    addChordToSequence: (chordId: string, voicingId?: string) => set((state) => {
        const selectedVoicing = voicingId ?? get().voicings.find((v) => chordId === v.chordId)?.id;
        return {
            sequence: [...state.sequence, { id: crypto.randomUUID(), chordId, voicingId: selectedVoicing || "" }]
        }
    }),
    removeChordFromSequence: (itemId: string) => set((state: MusicStore) => {
        console.log("removing item:", itemId, state.sequence)
        const filteredSequence = state.sequence.filter((item) => item.chordId !== itemId);
        console.log("filtered sequence", filteredSequence)
        return { sequence: filteredSequence };

    }),
    updateVoicingInStep: (itemId: string, newVoicingId: string) => set((state) => ({
        sequence: state.sequence.map((item) => item.id === itemId ? { ...item, voicingId: newVoicingId } : item)
    })),

    clearSequence: () => set({ sequence: [], activeIndex: null, isPlaying: false }),
    reorderSequence: (startIndex: number, endIndex: number) => set((state) => {
        const sequence = [...state.sequence];
        const [removed] = sequence.splice(startIndex, 1);
        sequence.splice(endIndex, 0, removed);
        return { sequence };
    }),
    setActiveIndex: (index: number | null) => set({ activeIndex: index }),
    setBPM: (bpm: number) => set({ bpm }),
    togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying }))
})