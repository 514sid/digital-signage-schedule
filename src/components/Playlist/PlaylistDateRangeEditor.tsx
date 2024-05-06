import { useEffect, useState } from "react"
import { Range } from "@/types"
import { DatePicker, RadioContainer } from "@/components"

export const PlaylistDateRangeEditor = ({
    value,
    onChange,
}: {
    value: Range
    onChange: (value: Range | null) => void
}) => {
    const [startDate, setStartDate] = useState<string | undefined>(value ? value.start : undefined)
    const [endDate, setEndDate] = useState<string | undefined>(value ? value.end : undefined)
    const [hasDateRange, setHasDateRange] = useState<boolean>(!!value)

    const handleStartDateChange = (date: string) => {
        if (hasDateRange) {
            setStartDate(date)
            onChange({ start: date, end: endDate! })
        }
    }

    const handleEndDateChange = (date: string) => {
        if (hasDateRange) {
            setEndDate(date)
            onChange({ start: startDate!, end: date })
        }
    }

    useEffect(() => {
        if (!hasDateRange) {
            onChange(null)
        } else {
            onChange({ start: startDate!, end: endDate! })
        }
    }, [hasDateRange, startDate, endDate, onChange])

    const handleTabChange = (dateRange: boolean) => {
        setHasDateRange(dateRange)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">Date</div>
            <div>
                <RadioContainer>
                    <div
                        className={ `h-10 flex items-center px-4 rounded-xl transition select-none cursor-pointer ${
                            !hasDateRange ? "bg-white" : "text-neutral-500 hover:text-black"
                        }` }
                        onClick={ () => handleTabChange(false) }
                        draggable={ false }
                    >
                        Indefinitely
                    </div>
                    <div
                        className={ `h-10 flex items-center px-4 rounded-xl transition select-none cursor-pointer ${
                            hasDateRange ? "bg-white" : "text-neutral-500 hover:text-black"
                        }` }
                        onClick={ () => handleTabChange(true) }
                        draggable={ false }
                    >
                        Custom
                    </div>
                </RadioContainer>
            </div>
            {hasDateRange && (
                <div className="flex gap-10">
                    <div>
                        <div className="text-lg font-bold mb-2">From</div>
                        <DatePicker
                            value={ startDate || null }
                            onChange={ handleStartDateChange }
                            maxDate={ endDate }
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">To</div>
                        <DatePicker
                            value={ endDate }
                            onChange={ handleEndDateChange }
                            minDate={ startDate }
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
