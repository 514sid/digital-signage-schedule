import { useEffect, useState } from "react"
import { Screen } from "@/types"
import { usePlaylists } from "@/hooks"
import { PlaylistModel } from "@/models"

const screenData = [
    {
        id: "e8aff749-6032-4040-98a1-6cacaa3fbb97",
        name: "Screen in New York",
        timezone: "America/New_York"
    },
    {
        id: "9e4e2bf3-0710-4999-a0d2-e3e9721df72b",
        name: "Screen in Dubai",
        timezone: "Asia/Dubai"
    },
    {
        id: "5209cdb4-4bed-49eb-b19c-00be26c04274",
        name: "Screen in London",
        timezone: "Europe/London"
    }
]

export const useScreens = () => {
    const { playlists } = usePlaylists()
    const [screens, setScreens] = useState<Screen[]>([])

    useEffect(() => {
        const updatedScreens: Screen[] = screenData.map((data) => {
            const playlistsForScreen = playlists.filter(
                playlist => playlist.screens.includes(data.id)
            )
            return {
                ...data,
                playlists: playlistsForScreen.map(playlist => new PlaylistModel(playlist))
            }
        })
        setScreens(updatedScreens)
    }, [])

    const findScreen = (screenId: string) => {
        return screens.find(screen => screen.id === screenId)
    }

    return {
        screens,
        findScreen,
    }
}
