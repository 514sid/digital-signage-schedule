import { useEffect, useState } from "react"
import { PageInnerContainer } from "@/components"
import { usePlaylists, useScreens } from "@/hooks"
import { usePlaylist } from "@/hooks"
import { Screen } from "@/types"
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { PlaylistBuilder } from "@/utils"

export const PlaylistScreenManager = () => {
    const playlist = usePlaylist()
    const { screens } = useScreens()
    const { updatePlaylists } = usePlaylists()
    const [assignedScreenIds, setAssignedScreenIds] = useState<string[]>(playlist.screens)

    const notAssignedScreens = screens.filter(screen => !assignedScreenIds.includes(screen.id))
    const assignedScreens = screens.filter(screen => assignedScreenIds.includes(screen.id))

    const assign = (screen: Screen) => {
        setAssignedScreenIds((prevState) =>
            prevState.includes(screen.id)
                ? prevState.filter((id) => id !== screen.id)
                : [...prevState, screen.id]
        )
    }

    useEffect(() => {
        const newPlaylistData = new PlaylistBuilder()
            .parsePlaylist(playlist)
            .setScreens(assignedScreenIds)
            .build()

        updatePlaylists(newPlaylistData)
    }, [assignedScreens])

    return (
        <PageInnerContainer>
            <div className="flex flex-col gap-10">
                <div>
                    <div className="text-xl font-bold mb-2">
                        Available screens
                    </div>
                    <div className="flex gap-3">
                        {notAssignedScreens.map(screen => (
                            <div
                                key={ screen.id }
                                onClick={ () => assign(screen) }
                                className="flex items-center gap-2 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-lg cursor-pointer"
                            >
                                {screen.name}
                                <PlusIcon  className="w-3.5 h-3.5"/>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold mb-2">
                        Assigned screens
                    </div>
                    <div className="flex gap-3">
                        {assignedScreens.map(screen => (
                            <div
                                key={ screen.id }
                                onClick={ () => assign(screen) }
                                className="flex items-center gap-2 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-lg cursor-pointer"
                            >
                                {screen.name}
                                <XMarkIcon  className="w-3.5 h-3.5"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageInnerContainer>
    )
}