import dayjs, { Dayjs } from "dayjs"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"
import { Playlist, Range } from "@/types"
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export class PlaylistModel {
    id: string
    name: string
    startDay: dayjs.Dayjs | null = null
    endDay: dayjs.Dayjs | null = null
    minutesStartTime: number
    minutesEndTime: number
    weekdays: number[] | null = null
    priority: number
    timeRange: Range
    raw: Playlist

    constructor(playlist: Playlist) {
        this.id = playlist.id
        this.name = playlist.name
        this.priority = playlist.priority
        this.timeRange = playlist.timeRange
        this.raw = playlist

        if(playlist.dateRange) {
            this.startDay =  dayjs(playlist.dateRange.start)
            this.endDay = dayjs(playlist.dateRange.end).endOf("day")
        }

        if(playlist.timeRange) {
            const [startHours, startMinutes] = playlist.timeRange.start.split(":").map(Number)
            const [endHours, endMinutes] = playlist.timeRange.end.split(":").map(Number)

            this.minutesStartTime = (startHours * 60) + startMinutes
            this.minutesEndTime = (endHours * 60) + endMinutes
        } else {
            this.minutesStartTime = 0
            this.minutesEndTime = 1440
        }

        this.weekdays = playlist.weekdays ? playlist.weekdays.map(day => {
            return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].indexOf(day)
        }) : null
    }

    isDisplayingAtDate(date: Dayjs): boolean {
        const dayOfWeek = date.day()

        if (this.weekdays ? this.weekdays.includes(dayOfWeek) : true) {
            if (this.startDay && this.endDay) {
                return this.startDay.isSameOrBefore(date) && this.endDay.isSameOrAfter(date)
            }

            return true
        }

        return false
    }

    isDisplayingAtMinute(minute: number): boolean {
        if (this.minutesStartTime <= this.minutesEndTime) {
            return this.minutesStartTime <= minute && this.minutesEndTime >= minute
        }

        return minute >= this.minutesStartTime || minute <= this.minutesEndTime
    }
}