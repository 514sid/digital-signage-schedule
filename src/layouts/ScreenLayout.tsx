import { ScreenHeader } from "@/components"
import { Outlet } from "react-router-dom"

export const ScreenLayout = () => {
    return (
        <div className="relative flex flex-col grow">
            <ScreenHeader />
            <Outlet />
        </div>
    )
}
