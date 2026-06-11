import { Chord, ChordVoicing, ChordGeometry } from "@/types/domain.types";
import { PopulatedChord } from "@/store/music/selectors";

// ==========================================================================
// 1. TABLA: GEOMETRÍAS (Las formas puras de la mano)
// ==========================================================================
export const MOCK_GEOMETRIES: ChordGeometry[] = [
  // --- Formas Abiertas Mayores ---
  { id: "shape-c-open",  frets: ["x", 3, 2, 0, 1, 0] },
  { id: "shape-a-open",  frets: ["x", 0, 2, 2, 2, 0] },
  { id: "shape-g-open",  frets: [3, 2, 0, 0, 3, 3] },
  { id: "shape-e-open",  frets: [0, 2, 2, 1, 0, 0] },
  { id: "shape-d-open",  frets: ["x", "x", 0, 2, 3, 2] },

  // --- Formas Abiertas Menores ---
  { id: "shape-am-open", frets: ["x", 0, 2, 2, 1, 0] },
  { id: "shape-em-open", frets: [0, 2, 2, 0, 0, 0] },
  { id: "shape-dm-open", frets: ["x", "x", 0, 2, 3, 1] },

  // --- Formas Abiertas Dominantes (7) ---
  { id: "shape-g7-open", frets: [3, 2, 0, 0, 0, 1] },
  { id: "shape-e7-open", frets: [0, 2, 0, 1, 0, 0] },
  { id: "shape-a7-open", frets: ["x", 0, 2, 0, 2, 0] },

  // --- Formas con Cejilla Reutilizables (Normalizadas a baseFret: 1) ---
  { 
    id: "shape-barre-e-form", 
    frets: [1, 3, 3, 2, 1, 1], 
    barre: { fret: 1, startString: 1, endString: 6 } 
  },
  { 
    id: "shape-barre-am-form", 
    frets: ["x", 1, 3, 3, 2, 1], 
    barre: { fret: 1, startString: 1, endString: 5 } 
  }
];

// ==========================================================================
// 2. TABLA: ACORDES TEÓRICOS (Nomenclatura e información musical)
// ==========================================================================
export const MOCK_CHORDS: Chord[] = [
  // Mayores
  { id: "chord-c", name: "C", label: "Do mayor", rootNote: { name: "C", accidental: "natural" }, quality: "major" },
  { id: "chord-a", name: "A", label: "La mayor", rootNote: { name: "A", accidental: "natural" }, quality: "major" },
  { id: "chord-g", name: "G", label: "Sol mayor", rootNote: { name: "G", accidental: "natural" }, quality: "major" },
  { id: "chord-e", name: "E", label: "Mi mayor", rootNote: { name: "E", accidental: "natural" }, quality: "major" },
  { id: "chord-d", name: "D", label: "Re mayor", rootNote: { name: "D", accidental: "natural" }, quality: "major" },
  { id: "chord-f", name: "F", label: "Fa mayor", rootNote: { name: "F", accidental: "natural" }, quality: "major" },

  // Menores
  { id: "chord-am", name: "Am", label: "La menor", rootNote: { name: "A", accidental: "natural" }, quality: "minor" },
  { id: "chord-em", name: "Em", label: "Mi menor", rootNote: { name: "E", accidental: "natural" }, quality: "minor" },
  { id: "chord-dm", name: "Dm", label: "Re menor", rootNote: { name: "D", accidental: "natural" }, quality: "minor" },
  { id: "chord-bm", name: "Bm", label: "Si menor", rootNote: { name: "B", accidental: "natural" }, quality: "minor" },

  // Dominantes 7
  { id: "chord-g7", name: "G7", label: "Sol séptima", rootNote: { name: "G", accidental: "natural" }, quality: "dominant7" },
  { id: "chord-e7", name: "E7", label: "Mi séptima", rootNote: { name: "E", accidental: "natural" }, quality: "dominant7" },
  { id: "chord-a7", name: "A7", label: "La séptima", rootNote: { name: "A", accidental: "natural" }, quality: "dominant7" }
];

// ==========================================================================
// 3. TABLA: VOICINGS (Relación que mapea el acorde al traste y su forma)
// ==========================================================================
export const MOCK_VOICINGS: ChordVoicing[] = [
  // --- Voicings Abiertos Mayores ---
  { id: "v-c-open",  chordId: "chord-c",  geometryId: "shape-c-open",  name: "Abierto", baseFret: 1, difficulty: 2 },
  { id: "v-a-open",  chordId: "chord-a",  geometryId: "shape-a-open",  name: "Abierto", baseFret: 1, difficulty: 1 },
  { id: "v-g-open",  chordId: "chord-g",  geometryId: "shape-g-open",  name: "Abierto", baseFret: 1, difficulty: 2 },
  { id: "v-e-open",  chordId: "chord-e",  geometryId: "shape-e-open",  name: "Abierto", baseFret: 1, difficulty: 1 },
  { id: "v-d-open",  chordId: "chord-d",  geometryId: "shape-d-open",  name: "Abierto", baseFret: 1, difficulty: 2 },

  // --- Voicings Abiertos Menores ---
  { id: "v-am-open", chordId: "chord-am", geometryId: "shape-am-open", name: "Abierto", baseFret: 1, difficulty: 1 },
  { id: "v-em-open", chordId: "chord-em", geometryId: "shape-em-open", name: "Abierto", baseFret: 1, difficulty: 1 },
  { id: "v-dm-open", chordId: "chord-dm", geometryId: "shape-dm-open", name: "Abierto", baseFret: 1, difficulty: 2 },

  // --- Voicings Dominantes 7 ---
  { id: "v-g7-open", chordId: "chord-g7", geometryId: "shape-g7-open", name: "Abierto", baseFret: 1, difficulty: 2 },
  { id: "v-e7-open", chordId: "chord-e7", geometryId: "shape-e7-open", name: "Abierto", baseFret: 1, difficulty: 1 },
  { id: "v-a7-open", chordId: "chord-a7", geometryId: "shape-a7-open", name: "Abierto", baseFret: 1, difficulty: 1 },

  // --- Cejillas Reutilizando Formas Geométricas ---
  // El acorde F usa la forma de "E" en el Traste 1
  { id: "v-f-barre", chordId: "chord-f", geometryId: "shape-barre-e-form", name: "Cejilla T1", baseFret: 1, difficulty: 4 },
  // El acorde G con cejilla usa exactamente la misma forma de "E" pero arranca en el Traste 3
  { id: "v-g-barre", chordId: "chord-g", geometryId: "shape-barre-e-form", name: "Cejilla T3", baseFret: 3, difficulty: 4 },
  // El acorde Bm usa la forma de "Am" con cejilla en el Traste 2
  { id: "v-bm-barre", chordId: "chord-bm", geometryId: "shape-barre-am-form", name: "Cejilla T2", baseFret: 2, difficulty: 4 }
];

export const MOCK_POPULATED_CHORDS: PopulatedChord[] = MOCK_CHORDS.map((chord) => {
  const voicings = MOCK_VOICINGS.filter((v) => v.chordId === chord.id).map((voicing) => {
    const geometry = MOCK_GEOMETRIES.find((g) => g.id === voicing.geometryId);
    
    if (!geometry) {
      throw new Error(`Geometry not found for voicing: ${voicing.id}`);
    }

    const { geometryId, ...restVoicing } = voicing;

    return {
      ...restVoicing,
      geometry,
    };
  });

  return {
    ...chord,
    voicings,
  };
});