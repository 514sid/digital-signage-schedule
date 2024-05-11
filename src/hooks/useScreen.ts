import { ScreenContext } from "@/providers/ScreenProvider"
import { Screen } from "@/types"
import { useContext } from "react"

export const useScreen = (): Screen => {
    const screen = useContext(ScreenContext)
    
    if (!screen) {
        throw new Error("useScreen must be used within a ScreenProvider")
    }

    return screen
}