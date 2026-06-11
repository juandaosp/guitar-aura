import { Chord, ChordGeometry, ChordVoicing } from "@/types/domain.types";

export interface SequenceItem {
    id: string;
    chordId: string;
    voicingId: string;
}

export interface ChordCatalogState {
    chords: Chord[];
    geometries: ChordGeometry[];
    voicings: ChordVoicing[];
    loadCatalogData: (chords: Chord[], geometries: ChordGeometry[], voicings: ChordVoicing[]) => void;
}

export interface LoopSequenceState {
    sequence: SequenceItem[];
    activeIndex: number | null;
    bpm?: number;
    isPlaying?: boolean;
    addChordToSequence: (chordId: string, voicingId?: string) => void;
    removeChordFromSequence: (itemId: string) => void;
    updateVoicingInStep: (itemId: string, newVoicingId: string) => void;
    clearSequence: () => void;
    reorderSequence: (startIndex: number, endIndex: number) => void;
    setActiveIndex: (index: number | null) => void;
    setBPM: (bpm: number) => void;
    togglePlaying: () => void;
}

export type MusicStore = ChordCatalogState & LoopSequenceState;