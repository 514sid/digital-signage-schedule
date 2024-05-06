import { useState, useMemo } from "react"

type Option = {
    label: string
    value: string | number
}

export const useCustomSelectFilter = (
    initialOptions: Option[],
) => {
    const [query, setQuery] = useState("")
    const memoizedOptions = useMemo(() => initialOptions, [initialOptions])

    const filteredOptions = useMemo(() => {
        if (query === "") {
            return memoizedOptions
        } else {
            return memoizedOptions.filter(option => {
                const labelMatch = option.label.toLowerCase().includes(query.toLowerCase())
                const valueMatch = option.value.toString().toLowerCase().includes(query.toLowerCase())
                return labelMatch || valueMatch
            })
        }
    }, [memoizedOptions, query])

    return {
        filteredOptions,
        setFilterQuery: setQuery,
    }
}
