import { PageInnerContainer, PlaylistCard } from "@/components"
import { useScreen } from "@/providers"

export const ScreenPlaylists = () => {
    const screen = useScreen()

    return (
        <PageInnerContainer>
            <div className="grid grid-cols-1 max-w-screen-md">
                {screen.playlists.map(playlist => (
                    <PlaylistCard
                        key={ playlist.id }
                        playlist={ playlist.raw }
                    />
                ))}
            </div>
        </PageInnerContainer>
    )
}
