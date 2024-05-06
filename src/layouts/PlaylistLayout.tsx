import { PlaylistHeader } from "@/components"
import { Outlet } from "react-router-dom"

export const PlaylistLayout = () => {
    return (
        <div className="relative">
            <PlaylistHeader />
            <Outlet />
        </div>
    )
}
