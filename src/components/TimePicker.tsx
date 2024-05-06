import { useEffect } from "react"
import { useTime } from "@/hooks"
import { CustomSelect } from "@/components"

export const TimePicker = ({
    value,
    onChange,
    maxTime,
    minTime,
}: {
    value: string | null | undefined
    onChange: (value: string) => void
    maxTime?: string
    minTime?: string
}) => {
    const { time, hours, minutes, selectedHours, selectedMinutes, setHours, setMinutes } = useTime(
        value,
        minTime,
        maxTime
    )

    useEffect(() => onChange(time), [time])

    return (
        <div className="flex gap-1.5 items-center">
            <div className="w-[70px]">
                <CustomSelect
                    options={ hours }
                    selected={ selectedHours }
                    onSelectChange={ (value) => setHours(value as string) }
                />
            </div>
            <div className="text-xl">:</div>
            <div className="w-[70px]">
                <CustomSelect
                    options={ minutes }
                    selected={ selectedMinutes }
                    onSelectChange={ (value) => setMinutes(value as string) }
                />
            </div>
        </div>
    )
}
