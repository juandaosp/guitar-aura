import { useState, useEffect, useRef } from "react";

interface UseTimerInputProps {
  value: number | null;
  setVal: (val: number) => void;
}

interface UseTimerInputReturn {
  inputRef: React.RefObject<HTMLInputElement | null>;
  localValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
}

export const useTimerInput = ({ value, setVal }: UseTimerInputProps): UseTimerInputReturn => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Estado local para la edición fluida del texto
  const [localValue, setLocalValue] = useState(
    value ? String(value).padStart(2, "0") : ""
  );

  useEffect(() => {
    if (document.activeElement === inputRef.current) return;
    setLocalValue(value !== null ? String(value).padStart(2, "0") : "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 2);

    if (val !== "" && parseInt(val, 10) > 59) {
      val = "59";
    }

    setLocalValue(val);
    const numValue = val === "" ? 0 : parseInt(val, 10);
    setVal(numValue);
  };

  const handleBlur = () => {
    const padded = localValue.padStart(2, "0");
    setLocalValue(padded);
    setVal(parseInt(padded, 10));
  };

  
  return {
    inputRef,
    localValue,
    handleChange,
    handleBlur,
  };
};