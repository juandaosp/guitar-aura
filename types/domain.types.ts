export type GuitarStringValue = number | "x";
export type FingerValue = number | null;
export type GuitarStrings<T> = [T, T, T, T, T, T];

export interface ChordGeometry {
    id: string;
    frets: GuitarStrings<GuitarStringValue>;
    fingers?: GuitarStrings<FingerValue>;
    barre?: {
        fret: number;
        startString: number;
        endString: number;
    };
}

export interface ChordVoicing {
    id: string;
    chordId: string;
    geometryId: string;
    name: string;
    baseFret: number;
    difficulty: number;
}

export interface Chord {
    id: string;
    name: string;
    label: string;
    rootNote: Note;
    quality: ChordQuality;
    bassNote?: Note;
    tags?: string[];
}

export interface Note {
    name: NoteName;
    accidental: Accidental;
    octave?: number;
}

export const NOTE_NAMES = ["A", "B", "C", "D", "E", "F", "G"] as const;
export const ACCIDENTALS = ["natural", "sharp", "flat", "double-sharp", "double-flat"] as const;
export const CHORD_QUALITIES = ["major", "minor", "diminished", "augmented", "maj7", "min7", "dominant7", "sus2", "sus4"] as const;

export type NoteName = typeof NOTE_NAMES[number];
export type Accidental = typeof ACCIDENTALS[number];
export type ChordQuality = typeof CHORD_QUALITIES[number];