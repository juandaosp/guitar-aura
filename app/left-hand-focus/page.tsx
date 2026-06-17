import { SequenceSelector } from '@/components/sequence-selector'
import { SequenceDisplay } from '@/components/sequence-display'

export default function LeftHandFocus() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Left Hand Focus
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Left Hand Focus Details
        </p>
      </header>
      <SequenceSelector />
      <SequenceDisplay />
    </section>
  )
}
