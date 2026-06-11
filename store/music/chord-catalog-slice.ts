import { type StateCreator } from 'zustand'
import type { Chord, ChordVoicing, ChordGeometry } from '@/types/domain.types';
import { ChordCatalogState, MusicStore } from './types';
import { MOCK_GEOMETRIES, MOCK_VOICINGS, MOCK_CHORDS } from '@/mocks/music';

export const chordCatalogSlice: StateCreator<MusicStore, [], [], ChordCatalogState> = (set) => ({
    chords: MOCK_CHORDS,
    geometries: MOCK_GEOMETRIES,
    voicings: MOCK_VOICINGS,
    loadCatalogData: (chords: Chord[], geometries: ChordGeometry[], voicings: ChordVoicing[]) => set({ chords, geometries, voicings })
});