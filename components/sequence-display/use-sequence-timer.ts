import { TimerMode } from "@/store/timer/types";
import { useState, useEffect } from "react";

interface TimerState {
    min: number | null;
    sec: number | null;
}

interface UseSequenceTimerReturn {
    min: number | null;
    sec: number | null;
    activeMode: TimerMode;
    isStopwatch: boolean;
    isRunning: boolean;
    setMin: (min: number | null) => void;
    setSec: (sec: number | null) => void;
    handleModeChange: (mode: TimerMode) => void;
    toggleTimer: () => void;
    resetTimer: () => void;
}

export const useSequenceTimer = (): UseSequenceTimerReturn => {
    const [activeMode, setActiveMode] = useState<TimerMode>(TimerMode.COUNTDOWN);
    const [isRunning, setIsRunning] = useState(false);

    // Agrupamos en un solo estado para garantizar actualizaciones atómicas en el interval
    const [time, setTime] = useState<TimerState>({ min: null, sec: null });

    const setMin = (min: number | null) => setTime((prev) => ({ ...prev, min }));
    const setSec = (sec: number | null) => setTime((prev) => ({ ...prev, sec }));

    const handleModeChange = (mode: TimerMode) => {
        setIsRunning(false);
        setActiveMode(mode);
        if (mode === TimerMode.STOPWATCH) {
            setTime({ min: 0, sec: 0 });
        } else {
            setTime({ min: null, sec: null });
        }
    };

    const toggleTimer = () => {
        // Evita arrancar el Countdown si no se ha configurado el tiempo
        if (activeMode === TimerMode.COUNTDOWN && !time.min && !time.sec) return;
        setIsRunning((prev) => !prev);
    };

    const resetTimer = () => {
        setIsRunning(false);
        if (activeMode === TimerMode.STOPWATCH) {
            setTime({ min: 0, sec: 0 });
        } else {
            setTime({ min: null, sec: null });
        }
    };

    // Engine del Timer (Efecto aislado del ciclo de vida del setInterval)
    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime((prev) => {
                const currentMin = prev.min ?? 0;
                const currentSec = prev.sec ?? 0;

                if (activeMode === TimerMode.COUNTDOWN) {
                    // Si llegó a cero, paramos el reloj
                    if (currentMin === 0 && currentSec === 0) {
                        setIsRunning(false);
                        return prev;
                    }

                    if (currentSec > 0) {
                        return { ...prev, sec: currentSec - 1 };
                    } else {
                        return { min: currentMin - 1, sec: 59 };
                    }
                } else {
                    // Lógica de STOPWATCH (Cronómetro)
                    if (currentSec < 59) {
                        return { ...prev, sec: currentSec + 1 };
                    } else {
                        return { min: currentMin + 1, sec: 0 };
                    }
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, activeMode]);

    return {
        min: time.min,
        sec: time.sec,
        activeMode,
        isStopwatch: activeMode === TimerMode.STOPWATCH,
        isRunning,
        setMin,
        setSec,
        handleModeChange,
        toggleTimer,
        resetTimer,
    };
};