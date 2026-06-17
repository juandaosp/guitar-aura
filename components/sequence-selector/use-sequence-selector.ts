import { useState } from 'react'
import { useMusicStore } from '@/store/music/use-music-store'
import { type PopulatedSequenceStep } from '@/store/music/selectors'

export const useLoopSequenceManager = (sequence: PopulatedSequenceStep[]) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedChordId, setSelectedChordId] = useState<string | null>(null)

  const availableChords = useMusicStore((state) => state.chords)
  const allVoicings = useMusicStore((state) => state.voicings)
  const currentVoicings = allVoicings.filter(
    (v) => v.chordId === selectedChordId,
  )

  const addChordToSequence = useMusicStore((state) => state.addChordToSequence)
  const removeChordFromSequence = useMusicStore(
    (state) => state.removeChordFromSequence,
  )
  const clearSequence = useMusicStore((state) => state.clearSequence)
  const reorderSequence = useMusicStore((state) => state.reorderSequence)

  const handleSelectVoicing = (voicingId: string) => {
    if (!selectedChordId) return
    addChordToSequence(selectedChordId, voicingId)
    setIsOpen(false)
    setSelectedChordId(null)
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) setSelectedChordId(null)
  }

  const isSequenceFull = sequence.length >= 4

  return {
    // UI States
    isOpen,
    selectedChordId,
    isSequenceFull,

    // Data lists
    availableChords,
    currentVoicings,
    isSequenceEmpty: sequence.length === 0,

    // Core Handlers
    setSelectedChordId,
    setIsOpen,
    handleSelectVoicing,
    handleOpenChange,
    removeChordFromSequence,
    clearSequence,
    reorderSequence,
  }
}
