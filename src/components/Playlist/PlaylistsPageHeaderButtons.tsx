import { usePlaylists } from "@/hooks"
import { PlaylistBuilder } from "@/utils"
import Button from "@/components/Button"

export const PlaylistsPageHeaderButtons = () => {
    const { addPlaylist } = usePlaylists()

    const createDefaultPlaylist = () => {
        return new PlaylistBuilder()
            .setName("New playlist")
            .setScreens([])
            .build()
    }

    return (
        <>
            <Button
                text="Edit priorities"
                classes="bg-neutral-100 hover:bg-neutral-200"
                to="/playlists/priority"
            />
            <Button
                text="Create playlist"
                classes="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={ () => addPlaylist(createDefaultPlaylist()) }
            />
        </>
    )
}