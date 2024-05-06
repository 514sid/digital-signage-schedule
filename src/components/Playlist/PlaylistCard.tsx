import { Link } from "react-router-dom"
import { Playlist } from "@/types"
import { DateRangeDisplay } from "@/components"

export const PlaylistCard = ({
    playlist,
    selected,
    select,
    selectionModeEnabled,
}:{
    playlist: Playlist
    selected?: boolean
    select?: (playlist: Playlist) => void
    selectionModeEnabled?: boolean
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (selectionModeEnabled && select) {
            e.preventDefault()
            select(playlist)
        }
    }

    return (
        <Link
            onClick={ handleClick }
            to={ `/playlists/${playlist.id}` }
            className={
                [
                    "rounded-xl p-3 sm:p-4 transition-colors group hover:bg-neutral-50",
                    selected ? "bg-blue-50" : "bg-white"
                ].join(" ")
            }
            draggable={ false }
        >
            <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                    <div className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                        { playlist.name }
                    </div>
                    <DateRangeDisplay dateRange={ playlist.dateRange }/>
                    <div className="text text-neutral-400">
                        Screens: { playlist.screens.length }
                    </div>
                </div>
                <div>
                    { selected && (
                        <div className="text-sm text-blue-600">
                            Selected
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}
