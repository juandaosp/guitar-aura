"use client";
import {LoopSequence} from "@/components/loop-sequence/";
import { SequenceDisplay } from "@/components/sequence-display/sequence-display";

export default function LeftHandFocus() {
  return (
    <section className="flex flex-col gap-12">
      <LoopSequence />
      <SequenceDisplay />
    </section>
  );
}
