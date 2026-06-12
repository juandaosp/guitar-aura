"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { TimerInput } from "./timer-input";
import { TimerMode } from "@/store/timer/types";
import { useSequenceTimer } from "./use-sequence-timer";

interface ModeSwitchProps {
    mode: TimerMode;
    isActive: boolean;
    onClick: () => void;
}

const ModeSwitch = ({ mode, isActive, onClick }: ModeSwitchProps) => {
    const activeClass = isActive
        ? "border-b-2 border-primary text-primary dark:text-primary font-bold"
        : "text-muted-foreground/40 hover:text-muted-foreground/80 font-medium";

    return (
        <li
            className={`text-[11px] tracking-[2px] pb-1.5 uppercase cursor-pointer transition-all duration-200 ${activeClass}`}
            onClick={onClick}
        >
            {mode}
        </li>
    );
};

export const SequenceTimer = () => {
    const { isStopwatch, activeMode, min, sec, setMin, setSec, handleModeChange, } = useSequenceTimer();

    return (
        <div className="flex flex-col justify-center items-center w-full gap-4">
            <ul className="w-full flex justify-center items-center gap-10 select-none">
                <ModeSwitch
                    mode={TimerMode.COUNTDOWN}
                    isActive={activeMode === TimerMode.COUNTDOWN}
                    onClick={() => handleModeChange(TimerMode.COUNTDOWN)}
                />
                <ModeSwitch
                    mode={TimerMode.STOPWATCH}
                    isActive={activeMode === TimerMode.STOPWATCH}
                    onClick={() => handleModeChange(TimerMode.STOPWATCH)}
                />
            </ul>

            <div className={`w-1/3 flex justify-center items-center gap-1 p-4 transition-opacity duration-300 ${isStopwatch ? "opacity-60 pointer-events-none" : "opacity-100"}`}>
                <TimerInput value={min} setVal={setMin} />
                <span className="flex justify-center items-center text-5xl text-primary/70 pb-2">:</span>
                <TimerInput value={sec} setVal={setSec} />
            </div>

            <Button
                className="flex justify-center items-center px-4 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl w-full max-w-50"
                size="lg"
                onClick={() => console.log("Iniciar con:", { mode: activeMode, time: `${min}:${sec}` })}
            >
                <Play fill="currentColor" size={16} />
                <span className="text-lg font-semibold">Start Session</span>
            </Button>
        </div>
    );
};