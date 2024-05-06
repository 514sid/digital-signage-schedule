import { Playlist } from "@/types"
import Button from "@/components/Button"

export const PlaylistsPageSelectionControls = ({
    selectedItems,
    deletePlaylists,
    clearSelection,
    selectAll,
}: {
    selectedItems: Playlist[]
    deletePlaylists: (playlists: Playlist[]) => void
    clearSelection: () => void
    selectAll: () => void
}) => (
    <div className="sticky top-[132px] sm:top-[96px] w-full z-10 bg-white border-t border-neutral-100 px-5 py-3">
        <div className="flex items-center justify-between">
            <div>Selected {selectedItems.length}</div>
            <div className="flex gap-5">
                {selectedItems.length > 0 && (
                    <Button
                        onClick={ () => deletePlaylists(selectedItems) }
                        text="Delete playlists"
                        classes="bg-red-50 text-red-600 hover:bg-red-100"
                    />
                )}
                <Button
                    onClick={ () => selectAll() }
                    text="Select all"
                    classes="bg-neutral-50 hover:bg-neutral-100"
                />
                <Button
                    onClick={ () => clearSelection() }
                    text="Cancel selection"
                    classes="bg-neutral-50 hover:bg-neutral-100"
                />
            </div>
        </div>
    </div>
)