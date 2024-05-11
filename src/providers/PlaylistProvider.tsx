import { createContext } from "react"
import { Outlet, useParams } from "react-router-dom"
import { usePlaylists } from "@/hooks"
import { Playlist } from "@/types"
import { NotFoundPage } from "@/pages"

type PlaylistContextType = Playlist | undefined

export const PlaylistContext = createContext<PlaylistContextType>(undefined)

export const PlaylistProvider = () => {
    const params = useParams<{ playlistId: string }>()
    
    const { findPlaylist } = usePlaylists()

    const playlist = findPlaylist(params.playlistId!)

    return (
        <PlaylistContext.Provider value={ playlist }>
            { playlist ? (
                <Outlet />
            ): (
                <NotFoundPage />
            )}
        </PlaylistContext.Provider>
    )
}
