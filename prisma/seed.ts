// prisma/seed.ts
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../lib/generated/prisma/index.js'
import 'dotenv/config'
import { SEED_DATA } from './seedData'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Iniciando poblamiento relacional para Guitar Aura...')

  // 1. LIMPIEZA TOTAL EN CASCADA
  // El orden importa: Primero eliminamos la tabla puente para evitar violaciones de Foreign Key
  await prisma.voicing.deleteMany()
  await prisma.geometry.deleteMany()
  await prisma.chord.deleteMany()
  await prisma.practiceLog.deleteMany() // Limpiamos logs de pruebas anteriores

  console.log('🧹 Base de datos purgada por completo.')

  // 2. INSERCIÓN RELACIONAL CONSOLIDADA
  for (const item of SEED_DATA) {
    // A. Crear o recuperar el Chord (Usamos upsert por seguridad debido al @unique en 'name')
    const createdChord = await prisma.chord.upsert({
      where: { name: item.chord.name },
      update: {},
      create: item.chord,
    })

    // B. Crear la geometría física asociada
    const createdGeometry = await prisma.geometry.create({
      data: item.geometry,
    })

    // C. Conectar ambos mundos mediante el Voicing
    await prisma.voicing.create({
      data: {
        name: item.voicing.name,
        baseFret: item.voicing.baseFret,
        difficulty: item.voicing.difficulty,
        chordId: createdChord.id, // Inyección de UUID dinámica
        geometryId: createdGeometry.id, // Inyección de UUID dinámica
      },
    })
  }

  console.log(
    `\n✅ ¡Éxito! Se han poblado ${SEED_DATA.length} acordes con sus geometrías y voicings mapeados.`,
  )
}

main()
  .catch((e) => {
    console.error('❌ Error crítico durante el poblamiento masivo:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
