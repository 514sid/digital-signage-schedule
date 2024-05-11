import dayjs, { Dayjs } from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { useState } from "react"
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

const generateDays = (daysInMonth: number): number[] =>
    Array.from({ length: daysInMonth }, (_, index) => index + 1)

export const useDate = (
    initialDate?: Dayjs | null,
    min?: Dayjs,
    max?: Dayjs,
) => {
    const [date, setDate] = useState<Dayjs>(initialDate || dayjs())
    const days = generateDays(date.daysInMonth())

    const setNewDate  = (newDate: Dayjs): void => {
        const isNotBeforeMinDate = !min || newDate.isSameOrAfter(min, "day")
        const isNotAfterMaxDate = !max || newDate.isSameOrBefore(max, "day")
        
        if (isNotBeforeMinDate && isNotAfterMaxDate) {
            setDate(newDate)
        }
    }

    const setDay = (day: number): void => {
        setNewDate(date.date(Math.min(day, date.daysInMonth())))
    }
    
    const setMonth = (month: number): void => {
        const newDate = date.month(month - 1).startOf("month")
        const maxDays = newDate.daysInMonth()
        const day = Math.min(date.date(), maxDays)
        
        setNewDate(newDate.date(day).startOf("day"))
    }
    
    const setYear = (year: number | string): void => {
        const parsedYear = typeof year === "string" ? parseInt(year, 10) : year
        
        const newDate = date.year(parsedYear)
        const maxDays = newDate.daysInMonth()
        const day = Math.min(date.date(), maxDays)
        
        setNewDate(newDate.date(day).startOf("day"))
    }

    const formattedDate = date.format("YYYY-MM-DD")

    return {
        date,
        setDate,
        setDay,
        setMonth,
        setYear,
        days,
        day: date.date(),
        month: date.month() + 1,
        year: date.year(),
        formattedDate,
    }
}
