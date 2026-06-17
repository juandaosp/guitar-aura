// app/chord-bank/page.tsx
import { getChords } from '../actions/chords'
import { ChordBankGrid } from '@/components/chord-bank/chord-bank-grid'
import { Chord } from '@/lib/generated/prisma'
import { PopulatedChord } from '@/store/music/selectors'

export default async function ChordBankPage() {
  const result = await getChords()

  if (!result.success || !result.data) {
    return (
      <div className="p-6 text-red-500">
        Error al cargar el banco: {result.error}
      </div>
    )
  }

  const initialChords: Chord[] = result.data.map((chord) => ({
    ...chord,
    rootNote: chord.rootNoteName,
  }))

  return (
    <div className="mx-auto max-w-7xl space-y-10 p-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Chord Bank
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Your Chords List
        </p>
      </header>

      <section className="space-y-4">
        <ChordBankGrid
          initialChords={initialChords as unknown as PopulatedChord[]}
        />
      </section>
    </div>
  )
}
