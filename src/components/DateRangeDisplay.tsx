import { Range } from "@/types"

export const DateRangeDisplay = ({
    dateRange,
}: {
    dateRange: Range
}) => {
    if (!dateRange) {
        return <div>Displaying indefinitely</div>
    }

    const displayText =
        dateRange.start === dateRange.end
            ? `at ${dateRange.start}`
            : `from ${dateRange.start} to ${dateRange.end}`

    return <div>Displaying {displayText}</div>
}