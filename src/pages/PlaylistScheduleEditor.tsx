import Button from "@/components/Button"
import { Playlist, Weekday } from "@/types"
import { PageInnerContainer, PlaylistDateRangeEditor, PlaylistTimeRangeEditor, PlaylistWeekdaysEditor } from "@/components"
import { useEffect, useState } from "react"
import { PlaylistBuilder } from "@/utils"
import { usePlaylists } from "@/hooks"
import { usePlaylist } from "@/providers"

export const PlaylistScheduleEditor = () => {
    const playlist = usePlaylist()

    const { updatePlaylists } = usePlaylists()

    const [dateRange, setDateRange] = useState(playlist.dateRange)
    const [timeRange, setTimeRange] = useState(playlist.timeRange)
    const [weekdays, setWeekdays] = useState<Weekday[] | null>(playlist.weekdays)

    const [updatedPlaylistData, setUpdatedPlaylistData] = useState<Playlist>(playlist)

    const modified = JSON.stringify(playlist) !== JSON.stringify(updatedPlaylistData)

    useEffect(() => {
        const playlistBuilder = new PlaylistBuilder()
            .parsePlaylist(playlist)
            .setWeekdays(weekdays)
            .setDateRange(dateRange)
            .setTimeRange(timeRange)

        setUpdatedPlaylistData(playlistBuilder.build())
    }, [playlist, dateRange, timeRange, weekdays])

    return (
        <PageInnerContainer>
            <div className="flex flex-col gap-10 mb-20">
                <PlaylistDateRangeEditor
                    value={ dateRange }
                    onChange={ setDateRange }
                />
                <hr />
                <PlaylistTimeRangeEditor
                    value={ timeRange }
                    onChange={ setTimeRange }
                />
                <hr />
                <PlaylistWeekdaysEditor
                    value={ weekdays }
                    onChange={ setWeekdays }
                />
                { (updatedPlaylistData && modified) && (
                    <div>
                        <Button
                            text="Save changes"
                            classes="bg-blue-600 text-white hover:bg-blue-700"
                            onClick={ () => updatePlaylists(updatedPlaylistData) }
                        />
                    </div>
                )}
            </div>
        </PageInnerContainer>
    )
}