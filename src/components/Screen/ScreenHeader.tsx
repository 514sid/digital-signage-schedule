import { useScreen } from "@/hooks"
import { Tab } from "@/types"
import { PageHeader, PageTabs, ScreenDateTime } from "@/components"

export const ScreenHeader = () => {
    const screen = useScreen()

    const tabs: Tab[] = [
        {
            name: "Schedule",
            to: "",
        },
        {
            name: "Playlists",
            to: "playlists",
            counter: screen.playlists.length
        },
    ]

    return (
        <>
            <PageHeader
                title={ screen.name }
            />
            <div className="px-5 py-2">
                Local time: <ScreenDateTime />
            </div>
            <PageTabs tabs={ tabs }/>
        </>
    )
}
