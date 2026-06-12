import { Input } from "@/components/ui/input";
import { useTimerInput } from "./use-timer-input";

interface TimerInputProps {
  value: number | null;
  setVal: (val: number) => void;
}

export const TimerInput = ({ value, setVal }: TimerInputProps) => {
  // Extraemos todo lo necesario de nuestro hook especializado
  const { inputRef, localValue, handleChange, handleBlur } = useTimerInput({ value, setVal });

  return (
    <Input
      ref={inputRef}
      value={localValue}
      onChange={handleChange}
      onBlur={handleBlur}
      type="text"
      inputMode="numeric"
      className="h-20 w-24 text-center text-4xl md:text-6xl/none font-light text-primary placeholder:text-primary/60 border-none dark:bg-card/60 tracking-wider"
      placeholder="00"
    />
  );
};