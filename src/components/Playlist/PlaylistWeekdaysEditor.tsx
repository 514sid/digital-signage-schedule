import { Weekday } from "@/types"
import { WeekdayInput } from "@/components"

export const PlaylistWeekdaysEditor = ({
    value,
    onChange,
}: {
    value: Weekday[] | null
    onChange: (value: Weekday[] | null) => void
}) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">
                Weekdays
            </div>
            <div className="text-neutral-400">
                Click on a weekday to select or deselect.
            </div>
            <WeekdayInput
                value={ value }
                onChange={ onChange }
            />
        </div>
    )
}
