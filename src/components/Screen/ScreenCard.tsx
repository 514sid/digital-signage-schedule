import { Link } from "react-router-dom"
import { Screen } from "@/types"
import { PhotoIcon } from "@heroicons/react/24/solid"

const ScreenThumbnail = () => {
    return (
        <div className="bg-neutral-200 rounded aspect-video flex justify-center items-center">
            <PhotoIcon className="w-10 h-10 text-neutral-300"/>
        </div>
    )
}

const ScreenDetails = ({
    screen,
}: {
    screen: Screen
}) => {
    return (
        <div className="w-full grow flex flex-col-reverse sm:flex-row sm:justify-between items-start">
            <div>
                <div className="text-xl font-bold group-hover:text-blue-600 transition-colors my-2 sm:my-4">
                    { screen.name }
                </div>
                <div className="flex gap-5 items-center text-neutral-400">
                    <div>
                        Playlists: { screen.playlists.length }
                    </div>
                </div>
            </div>
            <div className="shink-0 flex gap-2 text-sm items-center font-medium bg-green-600/10 pl-1.5 pr-3 py-0.5 rounded-full">
                <div className="bg-green-600/50 rounded-full w-[10px] h-[10px]">
                </div>
                <div className="text-green-500">
                    Online
                </div>
            </div>
        </div>
    )
}

export const ScreenCard = ({
    screen,
}: {
    screen: Screen
}) => {
    return (
        <Link
            to={ `/screens/${screen.id}` }
            className="flex gap-3 sm:gap-4 bg-white rounded-xl p-3 sm:p-4 group overflow-hidden items-start transition-colors hover:bg-neutral-50"
            draggable={ false }
        >
            <div className="shrink-0 w-1/2 sm:w-1/4">
                <ScreenThumbnail />
            </div>
            <ScreenDetails screen={ screen } />
        </Link>
    )
}
