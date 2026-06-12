import { PopulatedSequenceStep } from "@/store/music/selectors";

interface SequenceProps {
    sequence: PopulatedSequenceStep[];
}

export const Sequence = ({ sequence }: SequenceProps) => {
    return (
        <section className="flex justify-around items-center gap-2 flex-wrap">
            {sequence.length &&
                sequence.map((s: PopulatedSequenceStep, index: number) => {
                    const lastIndex = sequence.length - 1;
                    const isLastElement = sequence[lastIndex]?.id === sequence[index].id;
                    return (
                        <div key={s.id} className="flex justify-center items-center gap-2">
                            <span className="text-8xl">
                                {sequence[index].name}
                            </span>

                            {!isLastElement &&
                                <span className='w-12 h-1.5 dark:bg-muted-foreground bg-muted'></span>
                            }
                        </div>
                    )
                })}
        </section>
    )
}