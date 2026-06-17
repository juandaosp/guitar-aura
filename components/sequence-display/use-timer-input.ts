'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'

interface UseTimerInputProps {
  globalValue: number | null
  setGlobalValue: (val: number | null) => void
}

export const useTimerInput = ({
  globalValue,
  setGlobalValue,
}: UseTimerInputProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const formatValue = (val: number | null): string => {
    if (val === null) return ''
    return String(val).padStart(2, '0')
  }

  const [localValue, setLocalValue] = useState<string>(formatValue(globalValue))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanValue = e.target.value.replace(/\D/g, '')

    if (cleanValue.length <= 2) {
      setLocalValue(cleanValue)
    }
  }

  const handleBlur = () => {
    if (localValue === '') {
      setGlobalValue(null)
      return
    }

    const parsed = parseInt(localValue, 10)
    if (!isNaN(parsed)) {
      setGlobalValue(parsed)
      setLocalValue(String(parsed).padStart(2, '0'))
    } else {
      setGlobalValue(null)
      setLocalValue('')
    }
  }

  return {
    inputRef,
    localValue,
    handleChange,
    handleBlur,
  }
}
