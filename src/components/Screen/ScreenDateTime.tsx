import { useLocalDateTime } from "@/hooks"
import { useScreen } from "@/hooks"
import { Screen } from "@/types"

export const ScreenDateTime = ({
    screen,
}: {
    screen?: Screen
}) => {
    const currentScreen = screen || useScreen()

    const { formattedDateTime } = useLocalDateTime(currentScreen.timezone)

    return formattedDateTime
}
