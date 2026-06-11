import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const handleNumericInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    let val = target.value.replace(/\D/g, "").slice(0, 2);

    if (val !== "" && parseInt(val, 10) > 59) {
        val = "59";
    }

    target.value = val;
};

const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.value.length === 1) {
        target.value = `0${target.value}`;
    }
};

export const SequenceTimer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4 ">
            <div className="w-1/3 flex justify-center items-center gap-1 p-4">
                <Input
                    type="text"
                    inputMode="numeric"
                    className="h-20 w-22 text-center text-4xl md:text-6xl/none font-light text-primary placeholder:text-primary/60 border-none dark:bg-card/60"
                    placeholder="00"
                    onInput={handleNumericInput}
                    onBlur={handleBlur}
                />
                <span className="flex justify-center items-center text-5xl text-primary/70 leading-0">:</span>
                <Input
                    type="text"
                    inputMode="numeric"
                    className="h-20 w-22 text-center text-4xl md:text-6xl/none font-light text-primary placeholder:text-primary/60 border-none dark:bg-card/60"
                    placeholder="00"
                    onInput={handleNumericInput}
                    onBlur={handleBlur}
                />
            </div>
            <Button className="flex justify-center items-center px-4 py-6 gap-2" size="lg">
                <Play fill='#000000'/>
                <span className="text-lg">Start Session</span>
            </Button>
        </div>
    )
}