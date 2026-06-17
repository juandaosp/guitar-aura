-- CreateEnum
CREATE TYPE "NoteName" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F', 'G');

-- CreateEnum
CREATE TYPE "Accidental" AS ENUM ('natural', 'sharp', 'flat', 'double-sharp', 'double-flat');

-- CreateEnum
CREATE TYPE "ChordQuality" AS ENUM ('major', 'minor', 'diminished', 'augmented', 'maj7', 'min7', 'dominant7', 'sus2', 'sus4');

-- CreateTable
CREATE TABLE "geometries" (
    "id" UUID NOT NULL,
    "frets" TEXT[],
    "fingers" INTEGER[],
    "barre_fret" INTEGER,
    "barre_start_string" INTEGER,
    "barre_end_string" INTEGER,

    CONSTRAINT "geometries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chords" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "label" VARCHAR(100) NOT NULL,
    "root_note_name" "NoteName" NOT NULL,
    "root_note_accidental" "Accidental" NOT NULL,
    "root_note_octave" INTEGER,
    "quality" "ChordQuality" NOT NULL,
    "bass_note_name" "NoteName",
    "bass_note_accidental" "Accidental",
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "chords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "voicings" (
    "id" UUID NOT NULL,
    "chord_id" UUID NOT NULL,
    "geometry_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "base_fret" INTEGER NOT NULL DEFAULT 1,
    "difficulty" INTEGER NOT NULL,

    CONSTRAINT "voicings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_logs" (
    "id" UUID NOT NULL,
    "mode" VARCHAR(20) NOT NULL,
    "duration_seconds" INTEGER NOT NULL,
    "number_of_changes" INTEGER NOT NULL,
    "perceived_accuracy" INTEGER NOT NULL,
    "bpm" INTEGER,
    "chords_practiced" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "practice_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chords_name_key" ON "chords"("name");

-- AddForeignKey
ALTER TABLE "voicings" ADD CONSTRAINT "voicings_chord_id_fkey" FOREIGN KEY ("chord_id") REFERENCES "chords"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voicings" ADD CONSTRAINT "voicings_geometry_id_fkey" FOREIGN KEY ("geometry_id") REFERENCES "geometries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
