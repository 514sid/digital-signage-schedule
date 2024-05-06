import { convertMinutesToTime } from "@/helpers"
import { PlaylistModel } from "@/models"

export class ScheduleItemModel {
    startTime: number
    endTime: number
    playlist: PlaylistModel | null

    constructor(startTime: number, endTime: number, playlist: PlaylistModel | null) {
        this.startTime = startTime
        this.endTime = endTime
        this.playlist = playlist
    }

    timeRangeToString(): string {
        const start = convertMinutesToTime(this.startTime)
        const end = convertMinutesToTime(this.endTime)

        if(!this.startTime && !this.endTime) {
            return "All day"
        }

        return `${start} – ${end}`
    }
}