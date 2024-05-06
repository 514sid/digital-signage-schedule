import { useState } from "react"
import { Weekday } from "@/types"

const weekdays: Weekday[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

const weekdayNames: { [key in Weekday]: string } = {
    MON: "Monday",
    TUE: "Tuesday",
    WED: "Wednesday",
    THU: "Thursday",
    FRI: "Friday",
    SAT: "Saturday",
    SUN: "Sunday"
}

export const useWeekdays = (initialSelectedWeekdays: Weekday[] | null = []) => {
    const [selectedWeekdays, setSelectedWeekdays] = useState<Weekday[]>(initialSelectedWeekdays || weekdays)

    const toggleWeekday = (weekday: Weekday) => {
        setSelectedWeekdays(prevSelected => {
            if (prevSelected.includes(weekday)) {
                return prevSelected.filter(selected => selected !== weekday)
            } else {
                return [...prevSelected, weekday]
            }
        })
    }

    const isSelected = (weekday: Weekday) => {
        return selectedWeekdays.includes(weekday)
    }

    const allSelected = selectedWeekdays.length === weekdays.length

    return {
        selectedWeekdays,
        toggleWeekday,
        setSelectedWeekdays,
        isSelected,
        allSelected,
        weekdays,
        weekdayNames
    }
}