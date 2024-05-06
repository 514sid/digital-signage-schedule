import { useDocumentTitle } from "@uidotdev/usehooks"
import { ReactNode } from "react"

export const PageHeader = ({
    title,
    buttons,
    itemName,
} : {
    title: string,
    buttons?: ReactNode,
    itemName?: string
}) => {
    useDocumentTitle(title)

    return (
        <div className="p-5 sticky top-0 bg-white lg:pr-7 z-50">
            <div className="text-blue-600">
                {itemName}
            </div>
            <div className="sm:flex justify-between sm:h-14 items-center">
                <div className="flex gap-5 items-center">
                    <h1 className="text-lg sm:text-2xl font-black">
                        { title }
                    </h1>
                </div>
                { buttons && (
                    <div className="flex gap-5 mt-5 sm:mt-0">
                        { buttons }
                    </div>
                )}
            </div>
        </div>
    )
}
