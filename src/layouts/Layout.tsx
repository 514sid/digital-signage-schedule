import { Sidebar } from "@/components"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="flex md:flex-row min-h-screen w-full">
            <div className="fixed bottom-0 z-10 w-full md:w-auto shrink-0 md:relative">
                <Sidebar />
            </div>
            <div className="grow mb-[72px] md:mb-0 flex flex-col relative">
                <Outlet />
            </div>
        </div>
    )
}
