import { createContext, useContext } from "react"
import { Outlet, useParams } from "react-router-dom"
import { useScreens } from "@/hooks"
import { Screen } from "@/types"
import { NotFoundPage } from "@/pages"

type ScreenContextType = Screen | undefined

const ScreenContext = createContext<ScreenContextType>(undefined)

export const ScreenProvider = () => {
    const params = useParams<{ screenId: string }>()
    
    const { findScreen } = useScreens()

    const screen = findScreen(params.screenId!)

    return (
        <ScreenContext.Provider value={ screen }>
            { screen ? (
                <Outlet />
            ): (
                <NotFoundPage />
            )}
        </ScreenContext.Provider>
    )
}

export const useScreen = (): Screen => {
    const screen = useContext(ScreenContext)
    
    if (!screen) {
        throw new Error("useScreen must be used within a ScreenProvider")
    }

    return screen
}
