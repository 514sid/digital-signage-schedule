import { useEffect, useState } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

export const useLocalDateTime = (
    timezone: string,
) => {
    const [dateTime, setDateTime] = useState(dayjs().tz(timezone))

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(dayjs().tz(timezone))
        }, 1000)

        return () => clearInterval(interval)
    }, [timezone])

    const formattedDateTime = dateTime.format("DD/MM/YY HH:mm")

    return {
        dateTime,
        formattedDateTime,
    }
}