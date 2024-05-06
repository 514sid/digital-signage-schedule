import { useScreens } from "@/hooks"
import { PageInnerContainer, ScreenCard, PageHeader } from "@/components"

export const ScreensPage = () => {
    const { screens } = useScreens()

    return (
        <>
            <PageHeader title="Screens" />
            <PageInnerContainer>
                <div className="grid grid-cols-1 max-w-screen-md">
                    { screens.map(screen => (
                        <ScreenCard
                            screen={ screen }
                            key={ screen.id }
                        />
                    ))}
                </div>
            </PageInnerContainer>
        </>
    )
}
