'use client'

import { useState } from 'react'
import { Chord } from '@/components/music/chord'
import type { PopulatedChord } from '@/store/music/selectors'
import { Button } from '@/components/ui/button'

interface ChordBankGridProps {
  initialChords: PopulatedChord[]
}

export const ChordBankGrid = ({ initialChords }: ChordBankGridProps) => {
  const [selectedQuality, setSelectedQuality] = useState<string>('ALL')

  // Filtrado reactivo en memoria basado en el enum nativo
  const filteredChords = initialChords.filter((chord) => {
    if (selectedQuality === 'ALL') return true
    // Comparamos ignorando mayúsculas/minúsculas para blindar el tipado de Prisma
    return chord.quality.toLowerCase() === selectedQuality.toLowerCase()
  })

  // Listado unificado de calidades para los filtros de la cabecera
  const qualities = [
    'ALL',
    'MAJOR',
    'MINOR',
    'DOMINANT7',
    'MAJ7',
    'MIN7',
    'SUS4',
  ]

  return (
    <div className="space-y-6">
      {/* Barra superior de Filtros Rápidos */}
      <div className="flex flex-wrap gap-2">
        {qualities.map((quality) => (
          <Button
            key={quality}
            variant={selectedQuality === quality ? 'default' : 'outline'}
            size="sm"
            className="rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
            onClick={() => setSelectedQuality(quality)}
          >
            {quality}
          </Button>
        ))}
      </div>

      {/* Grid del Catálogo Maestro */}
      <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
        {filteredChords.map((chord) => (
          <Chord key={chord.id} chord={chord} showExtendedDetails={true} />
        ))}
      </div>

      {/* Empty State */}
      {filteredChords.length === 0 && (
        <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/10 py-12 text-center">
          <p className="text-sm text-zinc-500 italic">
            No se encontraron acordes registrados bajo la categoría `&quot;`
            {selectedQuality}`&quot;`.
          </p>
        </div>
      )}
    </div>
  )
}
