import { useState } from "react"
import { DaySchedule } from "@/components"
import Button from "@/components/Button"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { useScreen } from "@/hooks"
import { useLocalDateTime } from "@/hooks"

export const ScreenDailySchedule = () => {
    const screen = useScreen()
    
    const { dateTime } = useLocalDateTime(screen.timezone)

    const [date, setDate] = useState(dateTime)

    return (
        <div>
            <div className="flex gap-5 mb-10 items-center">
                <Button
                    classes="bg-neutral-100 hover:bg-neutral-200"
                    onClick={ () => setDate(date.subtract(1, "day")) }
                    iconPosition="left"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                </Button>
                <div className="text-xl font-bold flex flex-col items-center">
                    <div>
                        { date.format("DD/MM/YYYY") }
                    </div>
                    <div className="text-base">
                        { date.format("dddd") }
                    </div>
                </div>
                <Button
                    classes="bg-neutral-100 hover:bg-neutral-200"
                    onClick={ () => setDate(date.add(1, "day")) }
                >
                    <ChevronRightIcon className="w-5 h-5" />
                </Button>
            </div>
            <div className="max-w-screen-md">
                <DaySchedule date={ date }/>
            </div>
        </div>
    )
}
