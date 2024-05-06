import { useState, useEffect } from "react"

const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`)

export const useTime = (
    initialTime?: string | null,
    min?: string,
    max?: string,
) => {
    const [selectedTime, setSelectedTime] = useState(initialTime || "00:00")

    useEffect(() => {
        if (initialTime && /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(initialTime)) {
            setSelectedTime(initialTime)
        }
    }, [initialTime])

    const setTime = (time: string) => {
        if ((!min || time >= min) && (!max || time <= max)) {
            setSelectedTime(time)
        }
    }

    const setHours = (hour: string) => {
        const newTime = `${hour}:${selectedTime.split(":")[1]}`
        setTime(newTime)
    }

    const setMinutes = (minute: string) => {
        const newTime = `${selectedTime.split(":")[0]}:${minute}`
        setTime(newTime)
    }

    const hours = Array.from({ length: 24 }, (_, i) => padZero(i))
    const minutes = Array.from({ length: 60 }, (_, i) => padZero(i))

    return {
        time: selectedTime,
        setHours,
        setMinutes,
        hours,
        minutes,
        selectedHours: selectedTime.split(":")[0],
        selectedMinutes: selectedTime.split(":")[1],
    }
}
