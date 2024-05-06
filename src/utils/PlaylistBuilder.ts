import { Playlist, Range, Weekday } from "@/types"

export class PlaylistBuilder {
    private playlist: Partial<Playlist>

    constructor() {
        this.playlist = {
            priority: 0,
            dateRange: null,
            timeRange: null,
            weekdays: null,
            screens: []
        }
    }

    parsePlaylist(playlist: Playlist): this {
        this.playlist = { ...playlist }
        return this
    }

    setId(id: string): this {
        this.playlist.id = id
        return this
    }

    setName(name: string): this {
        this.playlist.name = name
        return this
    }

    setDateRange(dateRange: Range): this {
        this.playlist.dateRange = dateRange
        return this
    }

    setTimeRange(timeRange: Range): this {
        this.playlist.timeRange = timeRange
        return this
    }

    setWeekdays(weekdays: Weekday[] | null): this {
        this.playlist.weekdays = weekdays
        return this
    }

    setScreens(screens: string[]): this {
        this.playlist.screens = screens
        return this
    }

    removeTimeRange(): this {
        this.playlist.timeRange = null
        return this
    }

    removeDateRange(): this {
        this.playlist.dateRange = null
        return this
    }

    build(): Playlist {
        if (!this.playlist.name || !this.playlist.screens) {
            throw new Error("Missing required fields to build playlist")
        }
        return this.playlist as Playlist
    }
}