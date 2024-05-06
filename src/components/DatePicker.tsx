import { CustomSelect } from "@/components"
import { useDate, useMonths } from "@/hooks"
import { useEffect } from "react"

export type Date = {
    day: number
    month: number
    year: number
}

export const DatePicker = ({
    value,
    onChange,
    minDate,
    maxDate,
}: {
    value: string | null | undefined
    onChange: (value: string) => void
    minDate?: string
    maxDate?: string
}) => {
    const { formattedDate, year, month, day, days, setMonth, setYear, setDay } = useDate(
        value ? new Date(value) : null, 
        minDate ? new Date(minDate) : undefined, 
        maxDate ? new Date(maxDate) : undefined
    )
    
    const { months, getMonthName, getMonthNumber } = useMonths()

    useEffect(() => onChange(formattedDate), [formattedDate])

    return (
        <div className="flex gap-1.5 items-center">
            <div className="w-[90px]">
                <CustomSelect
                    options={ ["2022", "2023", "2024", "2025"] }
                    selected={ year.toString() }
                    onSelectChange={ setYear }
                />
            </div>
            <div className="w-[135px]">
                <CustomSelect
                    options={ months }
                    selected={ getMonthName(month) || months[0] }
                    onSelectChange={ (value) => setMonth(getMonthNumber(value as string)) }
                />
            </div>
            <div className="w-[70px]">
                <CustomSelect
                    options={ days }
                    selected={ day.toString() }
                    onSelectChange={ (value) => setDay(value as number) }
                />
            </div>
        </div>
    )
}