import { useLocalStorage } from "@uidotdev/usehooks"
import { Playlist } from "@/types"
import { v4 as uuid } from "uuid"

export const usePlaylists = () => {
    const [playlists, setPlaylists] = useLocalStorage<Playlist[]>("playlists", [])

    const addPlaylist = (playlistData: Omit<Playlist, "id">) => {
        const playlist: Playlist = {
            ...playlistData,
            id: uuid(),
            priority: getHighestPriority() + 1
        }

        setPlaylists([...playlists, playlist])
    }

    const findPlaylist = (playlistId: string) => {
        return playlists.find(
            playlist => playlist.id === playlistId
        )
    }

    const deletePlaylists = (playlists: Playlist | Playlist[]) => {
        const playlistsToDelete: Playlist[] = Array.isArray(playlists) ? playlists : [playlists]
    
        setPlaylists(currentPlaylists =>
            currentPlaylists.filter(
                playlist => !playlistsToDelete.some(p => p.id === playlist.id)
            )
        )
    }

    const updatePlaylists = (newPlaylistsData: Playlist | Playlist[]) => {
        const updatedPlaylists: Playlist[] = Array.isArray(newPlaylistsData) ? newPlaylistsData : [newPlaylistsData]
    
        setPlaylists(
            playlists.map(existingPlaylist =>
                updatedPlaylists.find(p => p.id === existingPlaylist.id) || existingPlaylist
            )
        )
    }

    const getHighestPriority = () => {
        if (playlists.length === 0) return 0

        let highestPriorityPlaylist = playlists[0]

        for (let i = 1; i < playlists.length; i++) {
            if (playlists[i].priority > highestPriorityPlaylist.priority) {
                highestPriorityPlaylist = playlists[i]
            }
        }
        
        return highestPriorityPlaylist.priority
    }

    return {
        playlists,
        addPlaylist,
        deletePlaylists,
        updatePlaylists,
        findPlaylist,
    }
}
