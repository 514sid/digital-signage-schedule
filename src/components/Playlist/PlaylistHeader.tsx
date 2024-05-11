import { usePlaylist } from "@/hooks"
import { Tab } from "@/types"
import { PageHeader, PageTabs } from "@/components"
import Button from "@/components/Button"
import { usePlaylists } from "@/hooks"

const HeaderButtons = () => {
    const { deletePlaylists } = usePlaylists()
    const playlist = usePlaylist()

    return (
        <Button
            text="Delete playlist"
            classes="bg-neutral-100 hover:text-red-600 hover:bg-red-100"
            onClick={ () => deletePlaylists(playlist) }
        />
    )
}

export const PlaylistHeader = () => {
    const playlist = usePlaylist()

    const tabs: Tab[] = [
        {
            name: "Details",
            to: "",
        },
        {
            name: "Screens",
            to: "screens",
            counter: playlist.screens.length
        },
        {
            name: "Schedule",
            to: "schedule",
        },
    ]

    return (
        <>
            <PageHeader
                title={ playlist.name }
                buttons={ <HeaderButtons /> }
            />
            <PageTabs tabs={ tabs }/>
        </>
    )
}
