import { Reorder } from "framer-motion"
import { Playlist } from "@/types"

export const PlaylistsPriorityReorder = ({
    playlists,
    reorderPlaylists,
}: {
    playlists: Playlist[]
    reorderPlaylists: (playlists: Playlist[]) => void
}) => {
    const handleReorder = (updatedPlaylists: Playlist[]) => {
        const reorderedPlaylists = updatedPlaylists.map((playlist, index) => ({
            ...playlist,
            priority: updatedPlaylists.length - index
        }))

        reorderPlaylists(reorderedPlaylists)
    }

    if(playlists.length === 0) {
        return (
            <div className="text-3xl text-neutral-200 font-black">
                { "It seems like you haven't created any playlists yet." }
            </div>
        )
    }

    return (
        <Reorder.Group
            axis="y"
            values={ playlists }
            onReorder={ handleReorder }
            className="flex flex-col gap-2"
        >
            {playlists.map((playlist) => (
                <Reorder.Item
                    key={ playlist.id }
                    value={ playlist }
                    className="w-full p-5 px-7 bg-neutral-50 cursor-grab focus:cursor-grabbing rounded-lg text-lg font-bold"
                >
                    <div>
                        {playlist.name}
                    </div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
}
