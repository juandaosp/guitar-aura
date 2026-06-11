import { create } from 'zustand'
import type { MusicStore } from './types';
import { chordCatalogSlice } from './chord-catalog-slice';
import { loopSequenceSlice } from './sequence-slice';

export const useMusicStore = create<MusicStore>()((...a) => ({
    ...chordCatalogSlice(...a),
    ...loopSequenceSlice(...a),
}))