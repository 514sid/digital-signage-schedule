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
        
        let currentScheduleItem: ScheduleItemModel | null = null
        
        for (const { minute, item } of this.daySlots) {
            if (this.isNewScheduleItemNeeded(currentScheduleItem, minute, item)) {
                currentScheduleItem = this.createScheduleItem(minute, item)
                schedule.push(currentScheduleItem)
            } else {
                this.updateScheduleItemEndTime(currentScheduleItem!, minute)
            }
        }
    
        return schedule
    }
    
    private isNewScheduleItemNeeded(currentScheduleItem: ScheduleItemModel | null, minute: number, item: PlaylistModel | null): boolean {
        return !currentScheduleItem ||
               currentScheduleItem.playlist !== item ||
               currentScheduleItem.endTime !== minute - 1
    }
    
    private createScheduleItem(startTime: number, playlist: PlaylistModel | null): ScheduleItemModel {
        return new ScheduleItemModel(startTime, startTime, playlist)
    }
    
    private updateScheduleItemEndTime(scheduleItem: ScheduleItemModel, endTime: number): void {
        scheduleItem.endTime = endTime
    }
}
