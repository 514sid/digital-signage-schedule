import { usePlaylists } from "@/hooks"
import { Playlist } from "@/types"
import Button from "@/components/Button"

export const PlaylistsPriorityManagerHeaderButtons = ({
    playlists,
    reset,
    isReordered,
}: {
    playlists: Playlist[]
    reset: () => void
    isReordered: boolean
}) => {
    const { updatePlaylists } = usePlaylists()

    if(!isReordered) {
        return null
    }

    return (
        <>
            <Button
                text="Revert changes"
                classes="bg-neutral-100 hover:bg-neutral-200"
                onClick={ () => reset() }
            />
            <Button
                text="Save changes"
                classes="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={ () => updatePlaylists(playlists) }
            />
        </>
    )
}