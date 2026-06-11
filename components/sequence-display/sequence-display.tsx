"use client";
import { Sequence } from "@/components/sequence-display/sequence";
import { selectPopulatedSequence } from "@/store/music/selectors";
import { useMusicStore } from "@/store/music/use-music-store";
import { useShallow } from "zustand/react/shallow";
import { SequenceTimer } from "@/components/sequence-display/sequence-timer"

export const SequenceDisplay = () => {
    const sequence = useMusicStore(useShallow(selectPopulatedSequence));

    if (sequence.length > 0) {
        return (
            <section className="flex flex-col bg-card/60 justify-center items-center gap-6 rounded-lg p-6 border dark:border-accent border-accent-foreground/20">
                <h2 className="text-[10px] font-mono tracking-[4px] text-primary">ACTIVE SEQUENCE</h2>
                <Sequence sequence={sequence} />
                <SequenceTimer></SequenceTimer>
            </section>
        );
    }
};