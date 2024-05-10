import { PlaylistModel, ScheduleItemModel } from "@/models"

type Slot = {
    minute: number;
    item: PlaylistModel | null;
};

export class DayScheduleBuilder {
    private playlists: PlaylistModel[]
    private daySlots: Slot[] = []

    constructor(playlists: PlaylistModel[]) {
        this.playlists = playlists
    }

    build(): ScheduleItemModel[] {
        this.sortPlaylistsByPriority()
        this.buildDaySlots()
        return this.buildSchedule()
    }

    private sortPlaylistsByPriority(): void {
        this.playlists.sort((a, b) => b.priority - a.priority)
    }

    private buildDaySlots(): void {
        const minutesInDay = 1440
        this.daySlots = Array.from({ length: minutesInDay }, (_, minute) => ({
            minute,
            item: this.findPlaylistForMinuteSlot(minute),
        }))
    }

    private findPlaylistForMinuteSlot(minute: number): PlaylistModel | null {
        return this.playlists.find(playlist => playlist.isDisplayingAtMinute(minute)) || null
    }
    
    private buildSchedule(): ScheduleItemModel[] {
        const schedule: ScheduleItemModel[] = []
        let lastItem: PlaylistModel | null | undefined
    
        for (const { minute, item } of this.daySlots) {
            if (item !== lastItem) {
                schedule.push(this.createScheduleItem(minute, item))
                lastItem = item
            } else {
                this.updateScheduleItemEndTime(schedule[schedule.length - 1], minute)
            }
        }
    
        return schedule
    }
    
    private createScheduleItem(startTime: number, playlist: PlaylistModel | null): ScheduleItemModel {
        return new ScheduleItemModel(startTime, startTime, playlist)
    }
    
    private updateScheduleItemEndTime(scheduleItem: ScheduleItemModel, endTime: number): void {
        scheduleItem.endTime = endTime
    }
}
