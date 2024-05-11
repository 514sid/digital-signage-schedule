import { usePlaylist } from "@/hooks"
import { DateRangeDisplay } from "@/components"
import { ReactNode } from "react"

const ScheduleGroupTitle = ({
    title,
}: {
    title: string
}) => {
    return (
        <div className="font-bold text-lg">
            { title }
        </div>
    )
}

const ScheduleGroup = ({
    children,
}: {
    children: ReactNode
}) => {
    return (
        <div>
            { children }
        </div>
    )
}

export const PlaylistSchedule = () => {
    const playlist = usePlaylist()

    return (
        <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold ">Playlist schedule</h2>
            </div>
            <ScheduleGroup>
                <ScheduleGroupTitle title="Date" />
                <DateRangeDisplay dateRange={ playlist.dateRange }/>
            </ScheduleGroup>
            <ScheduleGroup>
                <ScheduleGroupTitle title="Time" />
                { playlist.timeRange ? (
                    <div>
                    Displaying from {playlist.timeRange.start} to {playlist.timeRange.end}
                    </div>
                ) : (
                    <div>
                    Displaying all day
                    </div>
                )}
            </ScheduleGroup>
            <ScheduleGroup>
                <ScheduleGroupTitle title="Weekdays" />
                { playlist.weekdays ? (
                    <div className="flex gap-2">
                        { playlist.weekdays.map(weekday => (
                            <div key={ weekday }>
                                { weekday }
                            </div>
                        )) }
                    </div>
                ) : (
                    <div>
                    Displaying all week
                    </div>
                )}
            </ScheduleGroup>
        </div>
    )
}
