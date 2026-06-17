import { Chord, ChordGeometry, ChordVoicing } from '@/types/domain.types'

export interface SequenceItem {
  id: string
  chordId: string
  voicingId: string
}

export interface ChordCatalogState {
  chords: Chord[]
  geometries: ChordGeometry[]
  voicings: ChordVoicing[]
  loadCatalogData: (
    chords: Chord[],
    geometries: ChordGeometry[],
    voicings: ChordVoicing[],
  ) => void
}

export interface LoopSequenceState {
  sequence: SequenceItem[]
  activeIndex: number | null
  bpm?: number
  isLogSessionActive?: boolean
  numberOfChanges: number
  perceivedAccuracy: number

  addChordToSequence: (chordId: string, voicingId?: string) => void
  removeChordFromSequence: (itemId: string) => void
  updateVoicingInStep: (itemId: string, newVoicingId: string) => void
  clearSequence: () => void
  reorderSequence: (startIndex: number, endIndex: number) => void
  setBPM: (bpm: number) => void
  toggleIsLogSessionActive: () => void
  setNumberOfChanges: (changes: number) => void
  setPerceivedAccuracy: (accuracy: number) => void
}

export type MusicStore = ChordCatalogState & LoopSequenceState
