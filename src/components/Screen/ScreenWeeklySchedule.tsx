import { useState } from "react"
import { DaySchedule } from "@/components"
import dayjs from "dayjs"
import Button from "@/components/Button"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useScreen } from "@/providers"
import { useLocalDateTime } from "@/hooks"
dayjs.Ls.en.weekStart = 1

export const ScreenWeeklySchedule = () => {
    const screen = useScreen()
    
    const { dateTime } = useLocalDateTime(screen.timezone)

    const [startDate, setStartDate] = useState(dateTime.startOf("week"))

    const handleNextWeek = () => {
        setStartDate(startDate.add(1, "week"))
    }

    const handlePreviousWeek = () => {
        setStartDate(startDate.subtract(1, "week"))
    }

    const weekDays = []
    for (let i = 0; i < 7; i++) {
        weekDays.push(startDate.add(i, "day"))
    }

    return (
        <>
            <div className="flex gap-5 mb-10">
                <Button
                    text="Previous week"
                    classes="bg-neutral-100 hover:bg-neutral-200"
                    onClick={ handlePreviousWeek }
                    iconPosition="left"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                </Button>
                <Button
                    text="Next week"
                    classes="bg-neutral-100 hover:bg-neutral-200"
                    onClick={ handleNextWeek }
                >
                    <ChevronRightIcon className="w-5 h-5" />
                </Button>
            </div>
            <div className="grid grid-cols-7 gap-4">
                {weekDays.map((date) => (
                    <div
                        key={ date.toString() }
                        className="relative"
                    >
                        <div className="mb-5 sticky top-0">
                            <div className="font-bold">{date.format("DD/MM/YYYY")}</div>
                            <div className="text-neutral-400">{date.format("dddd")}</div>
                        </div>
                        <DaySchedule date={ date } />
                    </div>
                ))}
            </div>
        </>
    )
}
