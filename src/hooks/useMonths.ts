import { useMemo } from "react"

export const useMonths = (
    locale?: string,
) => {
    const userLocale = locale || navigator.language

    const months = useMemo(() => {
        const formatter = new Intl.DateTimeFormat(userLocale, { month: "long" })
        return Array.from({ length: 12 }, (_, index) => {
            const date = new Date(2000, index, 1)
            return formatter.format(date).replace(/^\w/, (c) => c.toUpperCase())
        })
    }, [userLocale])

    const getMonthNumber = (monthName: string): number => {
        const monthIndex = months.findIndex(
            (month) => month.toLowerCase() === monthName.toLowerCase()
        )
        return monthIndex !== -1 ? monthIndex + 1 : 1
    }

    const getMonthName = (monthNumber: number | string): string => {
        const number = parseInt(monthNumber.toString())
    
        if (isNaN(number) || number < 1 || number > 12) {
            return months[1]
        }
    
        return months[number - 1]
    }
    
    return {
        months,
        getMonthNumber,
        getMonthName,
    }
}
