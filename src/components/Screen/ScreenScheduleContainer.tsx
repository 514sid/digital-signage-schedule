import { useState, useEffect } from "react"
import { ScreenDailySchedule, ScreenWeeklySchedule } from "@/components"

export const ScreenScheduleContainer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return screenWidth < 1285 ? <ScreenDailySchedule /> : <ScreenWeeklySchedule />
}
