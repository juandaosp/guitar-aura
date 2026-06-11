import type { PopulatedChord, PopulatedSequenceStep, PopulatedVoicing } from "@/store/music/selectors";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ChordProps {
    chord: PopulatedChord;
    isActive?: boolean;
    selectedVoicing?: PopulatedVoicing;
    sequenceStep: PopulatedSequenceStep;
    remove: (sequenceItemId: string) => void;
}

export const Chord = ({ chord, selectedVoicing, isActive, sequenceStep, remove }: ChordProps) => {
    const mainContainerClasses = isActive ?
        "dark:border-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.15)] bg-card/60" :
        "border dark:border-accent border-accent-foreground";
    const activeVoicing = selectedVoicing ?? chord.voicings[0];
    return (
        <div className={`flex flex-col justify-center items-center w-40 h-36 rounded-xl relative ${mainContainerClasses}`}>
            <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 p-0 h-6 w-6"
                onClick={() => remove(sequenceStep.id)}
            >
                <X className="h-4 w-4" />
            </Button>
            <span className="font-heading text-primary">{chord.name}</span>
            <span className="text-[10px] text-muted dark:text-muted-foreground tracking-tighter">
                {chord.label}
            </span>
            {activeVoicing && (
                <span className="mt-3 px-2 py-0.5 text-[9px] font-mono text-primary rounded border border-primary/20 tracking-wide">
                    {activeVoicing.name}
                </span>
            )}
            {activeVoicing && (
                <div className="flex gap-1 mt-4" aria-label={`Dificultad ${activeVoicing.difficulty} de 5`}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${index < activeVoicing.difficulty
                                ? "bg-primary shadow-[0_0_6px_rgba(52,211,153,0.6)]"
                                : "bg-muted-foreground/20"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
