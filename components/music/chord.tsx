// components/music/chord.tsx
import type { PopulatedChord, PopulatedVoicing } from '@/store/music/selectors'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface ChordProps {
  chord: PopulatedChord
  selectedVoicing?: PopulatedVoicing
  isActive?: boolean
  className?: string
  onClick?: () => void
  onRemove?: (e: React.MouseEvent) => void
  // ───👇 NUEVO: Activa la radiografía técnica para el Chord Bank
  showExtendedDetails?: boolean
}

export const Chord = ({
  chord,
  selectedVoicing,
  isActive = false,
  className = '',
  onClick,
  onRemove,
  showExtendedDetails = false,
}: ChordProps) => {
  const mainContainerClasses = isActive
    ? 'dark:border-emerald-500 border-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.15)] bg-card/60'
    : 'border dark:border-zinc-800 border-zinc-200 bg-zinc-900/40 text-white'

  const activeVoicing = selectedVoicing ?? chord.voicings?.[0]

  return (
    <div
      onClick={onClick}
      className={`flex w-38 flex-col items-center justify-center ${showExtendedDetails ? 'h-48' : 'h-36'} relative rounded-xl transition-all duration-200 ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''} ${mainContainerClasses} ${className}`}
    >
      {onRemove && (
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-destructive/10 hover:text-destructive absolute top-2 right-2 h-6 w-6 rounded-full p-0"
          onClick={(e) => {
            e.stopPropagation()
            onRemove(e)
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      <span className="font-heading text-primary text-xl font-bold">
        {chord.name}
      </span>
      <span className="text-[10px] tracking-tighter text-zinc-400">
        {chord.label}
      </span>

      {activeVoicing && (
        <span className="mt-2 max-w-[90%] truncate rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 font-mono text-[9px] tracking-wide text-zinc-300">
          {activeVoicing.name}
        </span>
      )}

      {showExtendedDetails && activeVoicing && (
        <div className="mt-2 w-full space-y-1 px-3 text-center text-[11px] text-zinc-400">
          <div className="flex justify-between border-t border-zinc-800/60 pt-1.5 text-[10px]">
            <span>Base Fret</span>
            <span className="font-mono font-bold text-lime-400">
              #{activeVoicing.baseFret}
            </span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span>Voicings:</span>
            <span className="font-medium text-zinc-300">
              {chord.voicings?.length ?? 1} pos.
            </span>
          </div>
        </div>
      )}

      {activeVoicing && (
        <div
          className="mt-3 flex gap-1"
          aria-label={`Dificultad ${activeVoicing.difficulty} de 5`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                index < activeVoicing.difficulty
                  ? 'bg-lime-400 shadow-[0_0_6px_rgba(163,230,53,0.6)]'
                  : 'bg-zinc-700'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
