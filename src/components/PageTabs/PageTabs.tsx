import { Tab } from "@/types"
import { PageTab } from "./PageTab"

type Props = {
    tabs: Tab[]
}

export const PageTabs = ({
    tabs,
}: Props) => {
    return (
        <div className="flex w-full border-b border-neutral-200">
            {tabs.map((tab, index) => (
                <PageTab
                    key={ index }
                    { ...tab }
                />
            ))}
        </div>
    )
}