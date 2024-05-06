import { useEffect } from "react"
import { Weekday } from "@/types"
import { useWeekdays } from "@/hooks"

type WeekdayInputProps = {
    value: Weekday[] | null
    onChange: (value: Weekday[] | null) => void
}

export const WeekdayInput = ({
    value,
    onChange,
}: WeekdayInputProps) => {
    const { isSelected, selectedWeekdays, allSelected, toggleWeekday, weekdayNames, weekdays } = useWeekdays(value)

    useEffect(() => {
        if (allSelected) {
            onChange(null)
        } else {
            onChange(selectedWeekdays)
        }
    }, [selectedWeekdays, allSelected, onChange])

    return (
        <div className="flex gap-5 flex-wrap">
            {weekdays.map(day => (
                <div
                    key={ day }
                    onClick={ () => toggleWeekday(day) }
                    className={
                        [
                            "cursor-pointer inline-flex text-xl font-bold transition-colors items-center select-none",
                            isSelected(day) ? "text-black" : "text-slate-300"
                        ].join(" ")
                    }
                >
                    { weekdayNames[day] }
                </div>
            ))}
        </div>
    )
}