// prisma/seedData.ts
import {
  NoteName,
  Accidental,
  ChordQuality,
} from '../lib/generated/prisma/index.js'

export const SEED_DATA = [
  // ==========================================
  // 1. ACORDES ABIERTOS MAYORES (CAGED)
  // ==========================================
  {
    chord: {
      name: 'C',
      label: 'C Major',
      rootNoteName: NoteName.C,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['x', '3', '2', '0', '1', '0'],
      fingers: [0, 3, 2, 0, 1, 0],
    },
    voicing: { name: 'C Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'A',
      label: 'A Major',
      rootNoteName: NoteName.A,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['x', '0', '2', '2', '2', '0'],
      fingers: [0, 0, 1, 2, 3, 0],
    },
    voicing: { name: 'A Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'G',
      label: 'G Major',
      rootNoteName: NoteName.G,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['3', '2', '0', '0', '0', '3'],
      fingers: [3, 2, 0, 0, 0, 4],
    },
    voicing: { name: 'G Abierto', baseFret: 1, difficulty: 2 },
  },
  {
    chord: {
      name: 'E',
      label: 'E Major',
      rootNoteName: NoteName.E,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['0', '2', '2', '1', '0', '0'],
      fingers: [0, 2, 3, 1, 0, 0],
    },
    voicing: { name: 'E Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'D',
      label: 'D Major',
      rootNoteName: NoteName.D,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['x', 'x', '0', '2', '3', '2'],
      fingers: [0, 0, 0, 1, 3, 2],
    },
    voicing: { name: 'D Abierto', baseFret: 1, difficulty: 2 },
  },

  // ==========================================
  // 2. ACORDES ABIERTOS MENORES
  // ==========================================
  {
    chord: {
      name: 'Am',
      label: 'A Minor',
      rootNoteName: NoteName.A,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.minor,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['x', '0', '2', '2', '1', '0'],
      fingers: [0, 0, 2, 3, 1, 0],
    },
    voicing: { name: 'Am Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'Em',
      label: 'E Minor',
      rootNoteName: NoteName.E,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.minor,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['0', '2', '2', '0', '0', '0'],
      fingers: [0, 2, 3, 0, 0, 0],
    },
    voicing: { name: 'Em Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'Dm',
      label: 'D Minor',
      rootNoteName: NoteName.D,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.minor,
      tags: ['open', 'beginner', 'essential'],
    },
    geometry: {
      frets: ['x', 'x', '0', '2', '3', '1'],
      fingers: [0, 0, 0, 2, 3, 1],
    },
    voicing: { name: 'Dm Abierto', baseFret: 1, difficulty: 2 },
  },

  // ==========================================
  // 3. ACORDES CON CEJILLA ESENCIALES (Barre Chords)
  // Aquí usamos tus campos de cejilla del modelo Geometry
  // ==========================================
  {
    chord: {
      name: 'F',
      label: 'F Major',
      rootNoteName: NoteName.F,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['barre', 'intermediate'],
    },
    geometry: {
      frets: ['1', '3', '3', '2', '1', '1'],
      fingers: [1, 3, 4, 2, 1, 1],
      barreFret: 1,
      barreStartString: 1,
      barreEndString: 6,
    },
    voicing: { name: 'F con Cejilla en E', baseFret: 1, difficulty: 4 },
  },
  {
    chord: {
      name: 'Fm',
      label: 'F Minor',
      rootNoteName: NoteName.F,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.minor,
      tags: ['barre', 'intermediate'],
    },
    geometry: {
      frets: ['1', '3', '3', '1', '1', '1'],
      fingers: [1, 3, 4, 1, 1, 1],
      barreFret: 1,
      barreStartString: 1,
      barreEndString: 6,
    },
    voicing: { name: 'Fm con Cejilla en Em', baseFret: 1, difficulty: 4 },
  },
  {
    chord: {
      name: 'B',
      label: 'B Major',
      rootNoteName: NoteName.B,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.major,
      tags: ['barre', 'intermediate'],
    },
    geometry: {
      frets: ['x', '2', '4', '4', '4', '2'],
      fingers: [0, 1, 2, 3, 4, 1],
      barreFret: 2,
      barreStartString: 1,
      barreEndString: 5,
    },
    voicing: { name: 'B con Cejilla en A', baseFret: 2, difficulty: 4 },
  },
  {
    chord: {
      name: 'Bm',
      label: 'B Minor',
      rootNoteName: NoteName.B,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.minor,
      tags: ['barre', 'intermediate', 'essential'],
    },
    geometry: {
      frets: ['x', '2', '4', '4', '3', '2'],
      fingers: [0, 1, 3, 4, 2, 1],
      barreFret: 2,
      barreStartString: 1,
      barreEndString: 5,
    },
    voicing: { name: 'Bm con Cejilla en Am', baseFret: 2, difficulty: 3 },
  },

  // ==========================================
  // 4. ACORDES SÉPTIMA (Dominantes, Maj7, Min7)
  // ==========================================
  {
    chord: {
      name: 'G7',
      label: 'G Dominant 7',
      rootNoteName: NoteName.G,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.dominant7,
      tags: ['open', 'blues', '7th'],
    },
    geometry: {
      frets: ['3', '2', '0', '0', '0', '1'],
      fingers: [3, 2, 0, 0, 0, 1],
    },
    voicing: { name: 'G7 Dominante Abierto', baseFret: 1, difficulty: 2 },
  },
  {
    chord: {
      name: 'Cmaj7',
      label: 'C Major 7',
      rootNoteName: NoteName.C,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.maj7,
      tags: ['open', 'jazz', '7th'],
    },
    geometry: {
      frets: ['x', '3', '2', '0', '0', '0'],
      fingers: [0, 3, 2, 0, 0, 0],
    },
    voicing: { name: 'Cmaj7 Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'A7',
      label: 'A Dominant 7',
      rootNoteName: NoteName.A,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.dominant7,
      tags: ['open', 'blues', '7th'],
    },
    geometry: {
      frets: ['x', '0', '2', '0', '2', '0'],
      fingers: [0, 0, 1, 0, 2, 0],
    },
    voicing: { name: 'A7 Dominante Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'E7',
      label: 'E Dominant 7',
      rootNoteName: NoteName.E,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.dominant7,
      tags: ['open', 'blues', '7th'],
    },
    geometry: {
      frets: ['0', '2', '0', '1', '0', '0'],
      fingers: [0, 2, 0, 1, 0, 0],
    },
    voicing: { name: 'E7 Dominante Abierto', baseFret: 1, difficulty: 1 },
  },

  // ==========================================
  // 5. ACORDES SUSPENDIDOS (Sus2, Sus4)
  // ==========================================
  {
    chord: {
      name: 'Dsus2',
      label: 'D Suspended 2',
      rootNoteName: NoteName.D,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.sus2,
      tags: ['open', 'ambient'],
    },
    geometry: {
      frets: ['x', 'x', '0', '2', '3', '0'],
      fingers: [0, 0, 0, 1, 3, 0],
    },
    voicing: { name: 'Dsus2 Abierto', baseFret: 1, difficulty: 1 },
  },
  {
    chord: {
      name: 'Dsus4',
      label: 'D Suspended 4',
      rootNoteName: NoteName.D,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.sus4,
      tags: ['open', 'ambient'],
    },
    geometry: {
      frets: ['x', 'x', '0', '2', '3', '3'],
      fingers: [0, 0, 0, 1, 3, 4],
    },
    voicing: { name: 'Dsus4 Abierto', baseFret: 1, difficulty: 2 },
  },
  {
    chord: {
      name: 'Asus4',
      label: 'A Suspended 4',
      rootNoteName: NoteName.A,
      rootNoteAccidental: Accidental.natural,
      quality: ChordQuality.sus4,
      tags: ['open', 'ambient'],
    },
    geometry: {
      frets: ['x', '0', '2', '2', '3', '0'],
      fingers: [0, 0, 1, 2, 4, 0],
    },
    voicing: { name: 'Asus4 Abierto', baseFret: 1, difficulty: 1 },
  },

  // ==========================================
  // 6. SOSTENIDOS Y BEMOLES ESENCIALES
  // ==========================================
  {
    chord: {
      name: 'F#m',
      label: 'F Sharp Minor',
      rootNoteName: NoteName.F,
      rootNoteAccidental: Accidental.sharp,
      quality: ChordQuality.minor,
      tags: ['barre', 'rock'],
    },
    geometry: {
      frets: ['2', '4', '4', '2', '2', '2'],
      fingers: [1, 3, 4, 1, 1, 1],
      barreFret: 2,
      barreStartString: 1,
      barreEndString: 6,
    },
    voicing: { name: 'F#m con Cejilla en Fret 2', baseFret: 2, difficulty: 4 },
  },
  {
    chord: {
      name: 'C#m',
      label: 'C Sharp Minor',
      rootNoteName: NoteName.C,
      rootNoteAccidental: Accidental.sharp,
      quality: ChordQuality.minor,
      tags: ['barre', 'pop'],
    },
    geometry: {
      frets: ['x', '4', '6', '6', '5', '4'],
      fingers: [0, 1, 3, 4, 2, 1],
      barreFret: 4,
      barreStartString: 1,
      barreEndString: 5,
    },
    voicing: { name: 'C#m con Cejilla en Fret 4', baseFret: 4, difficulty: 4 },
  },
  {
    chord: {
      name: 'G#',
      label: 'G Sharp Major',
      rootNoteName: NoteName.G,
      rootNoteAccidental: Accidental.sharp,
      quality: ChordQuality.major,
      tags: ['barre'],
    },
    geometry: {
      frets: ['4', '6', '6', '5', '4', '4'],
      fingers: [1, 3, 4, 2, 1, 1],
      barreFret: 4,
      barreStartString: 1,
      barreEndString: 6,
    },
    voicing: { name: 'G# con Cejilla en Fret 4', baseFret: 4, difficulty: 5 },
  },
  {
    chord: {
      name: 'Bb',
      label: 'B Flat Major',
      rootNoteName: NoteName.B,
      rootNoteAccidental: Accidental.flat,
      quality: ChordQuality.major,
      tags: ['barre'],
    },
    geometry: {
      frets: ['x', '1', '3', '3', '3', '1'],
      fingers: [0, 1, 2, 3, 4, 1],
      barreFret: 1,
      barreStartString: 1,
      barreEndString: 5,
    },
    voicing: { name: 'Bb con Cejilla en Fret 1', baseFret: 1, difficulty: 4 },
  },
]
