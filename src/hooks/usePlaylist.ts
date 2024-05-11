import { PlaylistContext } from "@/providers/PlaylistProvider"
import { Playlist } from "@/types"
import { useContext } from "react"

export const usePlaylist = (): Playlist => {
    const playlist = useContext(PlaylistContext)
    
    if (!playlist) {
        throw new Error("usePlaylist must be used within a PlaylistProvider")
    }

    return playlist
}