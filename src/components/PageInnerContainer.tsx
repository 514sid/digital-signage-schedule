import { ReactNode } from "react"

export const PageInnerContainer = ({
    children,
}: {
    children: ReactNode
}) => {
    return (
        <div className={ "p-5 lg:pr-7 grow relative" }>
            { children }
        </div>
    )
}
