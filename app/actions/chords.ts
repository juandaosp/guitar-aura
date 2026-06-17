// app/actions/chords.ts
'use server'

import { prisma } from '@/lib/prisma'
import { ChordQuality } from '@/lib/generated/prisma/index.js'

export async function getChords(filter?: {
  quality?: ChordQuality
  search?: string
}) {
  try {
    const chords = await prisma.chord.findMany({
      where: {
        AND: [
          filter?.quality ? { quality: filter.quality } : {},
          filter?.search
            ? {
                OR: [
                  { name: { contains: filter.search, mode: 'insensitive' } },
                  { label: { contains: filter.search, mode: 'insensitive' } },
                ],
              }
            : {},
        ],
      },
      include: {
        voicings: true,
      },
      orderBy: { name: 'asc' },
    })
    return { success: true, data: chords }
  } catch (error) {
    console.error('❌ Error al obtener acordes:', error)
    return {
      success: false,
      error: 'No se pudo cargar el catálogo de acordes.',
    }
  }
}
export async function getChordDetails(chordName: string) {
  try {
    const chordDetails = await prisma.chord.findUnique({
      where: { name: chordName },
      include: {
        voicings: {
          include: {
            geometry: true,
          },
        },
      },
    })

    if (!chordDetails) {
      return { success: false, error: 'Acorde no encontrado.' }
    }

    return { success: true, data: chordDetails }
  } catch (error) {
    console.error(`❌ Error al obtener detalle del acorde ${chordName}:`, error)
    return { success: false, error: 'Error al cargar la geometría del acorde.' }
  }
}
