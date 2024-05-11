import { Dayjs } from "dayjs"
import { useScreen } from "@/hooks"
import { DayScheduleBuilder } from "@/utils"
import { ScheduleItemModel } from "@/models"

const slotClasses = "rounded-lg px-4 py-3 flex text-sm flex-col gap-5 overflow-hidden"

const EmptySlotScheduleItem = ({
    item,
}: {
    item: ScheduleItemModel
}) => {
    return (
        <div className={ `bg-neutral-100 ${slotClasses}` }>
            <div className="font-bold break-all">
                Empty slot
            </div>
            <div className="text-sm text-neutral-600">
                { item.timeRangeToString() }
            </div>
        </div>
    )
}

const PlaylistScheduleItem = ({
    item,
}: {
    item: ScheduleItemModel
}) => {
    const playlist = item.playlist!

    return (
        <div
            className={ `bg-blue-600 ${slotClasses}` }
        >
            <div className="font-bold break-all text-white">
                { playlist.name }
            </div>
            <div className="text-sm text-white/50">
                { item.timeRangeToString() }
            </div>
        </div>
    )
}

const DayScheduleItem = ({
    item,
}: {
    item: ScheduleItemModel
}) => {
    if( item.playlist ) return <PlaylistScheduleItem item={ item }/>

    return <EmptySlotScheduleItem item={ item } />
}

export const DaySchedule = ({
    date,
}: {
    date: Dayjs
}) => {
    const screen = useScreen()

    const todayPlaylists = screen.playlists.filter((playlist) => playlist.isDisplayingAtDate(date))

    const dayScheduleBuilder = new DayScheduleBuilder(todayPlaylists)

    const schedule = dayScheduleBuilder.build()

    return (
        <div className="flex flex-col gap-2">
            { schedule.map((item, index) => (
                <DayScheduleItem
                    key={ index }
                    item={ item }
                />
            ))}
        </div>
    )
}
