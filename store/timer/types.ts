export enum TimerMode {
    COUNTDOWN = "COUNTDOWN",
    STOPWATCH = "STOPWATCH"
}
export enum TimerStatus {
    IDLE = "IDLE",
    RUNNING = "RUNNING",
    PAUSED = "PAUSED"
}

export interface TimerStore {
    mode: TimerMode;
    status: TimerStatus;
    timeInSeconds: number;

    updateTime: (timeInSeconds: number) => void;
    updateMode: (mode: TimerMode) => void;
    updateStatus: (status: TimerStatus) => void;
}