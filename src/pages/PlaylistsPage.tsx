import { useEffect } from "react"
import { Playlist } from "@/types"
import { usePlaylists, useSearch, useSelection } from "@/hooks"
import { ItemsSearch, PageHeader, PageInnerContainer, PlaylistCard, PlaylistsPageHeaderButtons, PlaylistsPageSelectionControls } from "@/components"
import Button from "@/components/Button"

export const PlaylistsPage = () => {
    const {
        playlists,
        deletePlaylists,
    } = usePlaylists()

    const {
        select,
        selectedItems,
        toggleSelection,
        selected,
        selectionModeEnabled,
        setSelectionModeEnabled,
        clearSelection,
    } = useSelection<Playlist>(playlists)

    const {
        inputProps,
        handleReset,
        filteredItems: filteredPlaylists,
        hasSearchValue,
    } = useSearch(playlists, ["name"])

    useEffect(() => {
        if (selectionModeEnabled && playlists.length === 0) {
            setSelectionModeEnabled(false)
        }
    }, [playlists, selectionModeEnabled, setSelectionModeEnabled])

    const sortedPlaylists = filteredPlaylists.sort((a, b) => b.priority - a.priority)

    return (
        <>
            <PageHeader
                title={ "Playlists" }
                buttons={ <PlaylistsPageHeaderButtons /> }
            />
            <div className="relative flex flex-col grow">
                {selectionModeEnabled && (
                    <PlaylistsPageSelectionControls
                        selectedItems={ selectedItems }
                        deletePlaylists={ deletePlaylists }
                        clearSelection={ clearSelection }
                        selectAll={ () => select(filteredPlaylists) }
                    />
                )}
                <PageInnerContainer>
                    {
                        playlists.length === 0 ? (
                            <div className="text-3xl text-neutral-200 font-black pt-10">
                                { "It seems like you haven't created any playlists yet" }
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-5">
                                    <ItemsSearch
                                        inputProps={ inputProps }
                                        handleReset={ handleReset }
                                        hasSearchValue={ hasSearchValue }
                                    />
                                    {!selectionModeEnabled && playlists.length > 0 && (
                                        <Button
                                            onClick={ () => setSelectionModeEnabled(true) }
                                            text="Select playlists"
                                            classes="bg-neutral-100 hover:bg-neutral-200"
                                        />
                                    )}
                                </div>
                                <div className="grid grid-cols-1 max-w-screen-md gap-2">
                                    {sortedPlaylists.map(playlist => (
                                        <PlaylistCard
                                            key={ playlist.id }
                                            playlist={ playlist }
                                            selectionModeEnabled={ selectionModeEnabled }
                                            select={ toggleSelection }
                                            selected={ selected(playlist) }
                                        />
                                    ))}
                                </div>
                            </>
                        )
                    }
                </PageInnerContainer>
            </div>
        </>
    )
}