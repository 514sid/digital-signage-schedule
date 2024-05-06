import dayjs from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { useState } from "react"
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const getMaxDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month + 1, 0)
    return date.getDate()
}

const formatDate = (date: Date): string => {
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    return `${year}-${month}-${day}`    
}

const generateDays = (daysInMonth: number): number[] => {
    return Array.from({ length: daysInMonth }, (_, index) => index + 1)
}

export const useDate = (
    initialDate?: Date | null,
    min?: Date,
    max?: Date,
) => {
    const [date, setDateState] = useState<Date>(initialDate || new Date())
    const days = generateDays(getMaxDaysInMonth(date.getFullYear(), date.getMonth()))

    const setDate = (newDate: Date): void => {
        if ((!min || dayjs(newDate).isSameOrAfter(min, "day")) && (!max || dayjs(newDate).isSameOrBefore(max, "day"))) {
            setDateState(newDate)
        }
    }

    const setDay = (day: number): void => {
        const newDate = new Date(date.getFullYear(), date.getMonth(), 1)
        const maxDay = Math.min(day, getMaxDaysInMonth(date.getFullYear(), date.getMonth()))
        newDate.setDate(maxDay)
        setDate(newDate)
    }

    const setMonth = (month: number): void => {
        const newDate = new Date(date.getFullYear(), month - 1, 1)
        const maxDays = getMaxDaysInMonth(date.getFullYear(), month - 1)
        newDate.setDate(Math.min(date.getDate(), maxDays))
        setDate(newDate)
    }

    const setYear = (year: number | string): void => {
        const parsedYear = typeof year === "string" ? parseInt(year, 10) : year
        const newDate = new Date(parsedYear, date.getMonth(), 1)
        const maxDays = getMaxDaysInMonth(parsedYear, date.getMonth())
        newDate.setDate(Math.min(date.getDate(), maxDays))
        setDate(newDate)
    }

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDate = formatDate(date)

    return {
        date,
        setDate,
        setDay,
        setMonth,
        setYear,
        days,
        day,
        month,
        year,
        formattedDate,
    }
}
