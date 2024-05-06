import { useEffect, useState } from "react"
import { Range } from "@/types"
import { RadioContainer, TimePicker } from "@/components"

export const PlaylistTimeRangeEditor = ({
    value,
    onChange,
}: {
    value: Range
    onChange: (value: Range) => void
}) => {
    const [startTime, setStartDate] = useState<string | undefined>(
        value ? value.start : undefined
    )
    const [endTime, setEndDate] = useState<string | undefined>(
        value ? value.end : undefined
    )
    const [hasTimeRange, setHasTimeRange] = useState<boolean>(!!value)

    const handleStartTimeChange = (date: string) => {
        if (hasTimeRange) {
            setStartDate(date)
            onChange({ start: date, end: endTime! })
        }
    }

    const handleEndTimeChange = (date: string) => {
        if (hasTimeRange) {
            setEndDate(date)
            onChange({ start: startTime!, end: date })
        }
    }

    useEffect(() => {
        if (!hasTimeRange) {
            onChange(null)
        } else {
            onChange({ start: startTime!, end: endTime! })
        }
    }, [hasTimeRange, startTime, endTime, onChange])

    const handleTabChange = (dateRange: boolean) => {
        setHasTimeRange(dateRange)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">
                Time
            </div>
            <div>
                <RadioContainer>
                    <div
                        className={
                            [
                                !hasTimeRange ? "bg-white" : "text-neutral-500 hover:text-black",
                                "h-10 flex items-center px-4 rounded-xl transition select-none cursor-pointer",
                            ].join(" ")
                        }
                        onClick={ () => handleTabChange(false) }
                        draggable={ false }
                    >
                        All day
                    </div>
                    <div
                        className={
                            [
                                hasTimeRange ? "bg-white" : "text-neutral-500 hover:text-black",
                                "h-10 flex items-center px-4 rounded-xl transition select-none cursor-pointer",
                            ].join(" ")
                        }
                        onClick={ () => handleTabChange(true) }
                        draggable={ false }
                    >
                        Custom
                    </div>
                </RadioContainer>
            </div>
            { hasTimeRange && (
                <div className="flex gap-10">
                    <div>
                        <div className="text-lg font-bold mb-2">
                            From
                        </div>
                        <TimePicker
                            value={ startTime || "00:00" }
                            onChange={ handleStartTimeChange }
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-2">
                            To
                        </div>
                        <TimePicker
                            value={ endTime || "23:59" }
                            onChange={ handleEndTimeChange }
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
