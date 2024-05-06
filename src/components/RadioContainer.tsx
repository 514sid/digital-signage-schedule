import { ReactNode } from "react"

export const RadioContainer = ({
    children,
}: {
    children: ReactNode
}) => {
    return (
        <div
            className="p-1 rounded-xl bg-neutral-100 inline-flex font-semibold gap-1"
            draggable={ false }
        >
            { children }
        </div>
    )
}
