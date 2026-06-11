import { Chord, ChordVoicing, ChordGeometry } from '@/types/domain.types';
import type { MusicStore } from './types';

export interface PopulatedVoicing extends Omit<ChordVoicing, "geometryId"> {
    geometry: ChordGeometry;
}

export interface PopulatedChord extends Chord {
    voicings: PopulatedVoicing[];
}

export interface PopulatedSequenceStep extends PopulatedChord {
    selectedVoicing: PopulatedVoicing;
}

let lastSequence: any = null;
let lastChords: any = null;
let lastVoicings: any = null;
let lastGeometries: any = null;
let cachedPopulatedResult: PopulatedSequenceStep[] = [];

export const selectPopulatedSequence = (state: MusicStore): PopulatedSequenceStep[] => {
    const { sequence, chords, voicings, geometries } = state;

    if (
        sequence === lastSequence &&
        chords === lastChords &&
        voicings === lastVoicings &&
        geometries === lastGeometries
    ) {
        return cachedPopulatedResult;
    }

    lastSequence = sequence;
    lastChords = chords;
    lastVoicings = voicings;
    lastGeometries = geometries;

    cachedPopulatedResult = sequence.map((item) => {
        const chord = chords.find((c) => c.id === item.chordId);
        const currentVoicing = voicings.find((v) => v.id === item.voicingId);
        const geometry = geometries.find((g) => g.id === currentVoicing?.geometryId);

        if (!chord || !currentVoicing || !geometry) {
            return {} as PopulatedSequenceStep;
        }

        return {
            ...chord,
            voicings: [],
            selectedVoicing: {
                ...currentVoicing,
                geometry
            },
        };
    });

    return cachedPopulatedResult;
};
