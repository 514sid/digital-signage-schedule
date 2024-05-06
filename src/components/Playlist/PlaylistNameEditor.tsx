import React, { useState } from "react"
import { usePlaylists } from "@/hooks"
import { usePlaylist } from "@/providers"
import { PlaylistBuilder } from "@/utils"
import Button from "@/components/Button"

export const PlaylistNameEditor = () => {
    const playlist = usePlaylist()
    const { updatePlaylists } = usePlaylists()
    const [newName, setNewName] = useState<string>(playlist.name)

    const update = () => {
        if (newName === "") {
            setNewName(playlist.name)
            return
        }

        const newPlaylistData = new PlaylistBuilder()
            .parsePlaylist(playlist)
            .setName(newName)
            .build()

        updatePlaylists(newPlaylistData)
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }

    const isNameChanged = newName !== playlist.name

    return (
        <div className="flex flex-col gap-3">
            <div className="text-xl font-bold">Playlist name</div>
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    name="playlistName"
                    value={ newName }
                    onChange={ handleNameChange }
                    className="bg-neutral-100 focus:bg-neutral-200 outline-none px-3.5 h-10 rounded-xl"
                    autoComplete="off"
                />
                {isNameChanged && (
                    <Button
                        text="Save"
                        onClick={ update }
                        classes="text-white bg-blue-600 hover:bg-blue-700"
                    />
                )}
            </div>
        </div>
    )
}