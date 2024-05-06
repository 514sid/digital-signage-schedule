import { PageHeader, PlaylistsPriorityReorder, PlaylistsPriorityManagerHeaderButtons } from "@/components"
import { usePlaylists, useReorder } from "@/hooks"

export const PlaylistsPriorityManager = () => {
    const pageTitle = "Playlists priority"

    const infoText = "The higher a playlist is on the list, the higher priority it has. If two playlists have overlapping schedules on the same screen, the one with higher priority will be displayed."
    
    const { playlists } = usePlaylists()

    playlists.sort((a, b) => b.priority - a.priority)

    const { reordered, isReordered, reset, reorder } = useReorder(playlists)

    return (
        <>
            <PageHeader
                title={ pageTitle }
                buttons={
                    <PlaylistsPriorityManagerHeaderButtons
                        playlists={ reordered }
                        reset={ reset }
                        isReordered={ isReordered }
                    />
                }
            />
            <div className="max-w-prose">
                <div className="p-5 text-neutral-600">
                    { infoText }
                </div>
            </div>
            <div className="max-w-screen-md p-5 overflow-hidden grow">
                <PlaylistsPriorityReorder
                    playlists={ reordered }
                    reorderPlaylists={ reorder }
                />
            </div>
        </>
    )
}
