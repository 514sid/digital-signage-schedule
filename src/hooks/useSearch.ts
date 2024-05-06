import { useDebounce } from "@uidotdev/usehooks"
import { ChangeEvent, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SearchInputProps } from "@/types"

export const useSearch = <T>(
    items: T[],
    filterProperties: (keyof T)[],
) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const debouncedSearchTerm = useDebounce(searchParams.get("search") || "", 500)

    const [value, setValue] = useState("")

    useEffect(() => {
        setValue(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value
        setValue(searchTerm)
        setSearchParams({ search: searchTerm })
    }

    const handleReset = () => {
        setValue("")
        setSearchParams({ search: "" })
    }

    const filteredItems = items.filter((item) =>
        filterProperties.some((prop) => {
            const propValue = item[prop]
            if (typeof propValue === "string") {
                return propValue.toLowerCase().includes(value.toLowerCase())
            }
            return false
        })
    )

    const hasSearchValue = !!value

    const inputProps: SearchInputProps = {
        value,
        onChange: handleSearch
    }

    return {
        inputProps,
        handleReset,
        filteredItems,
        setValue,
        hasSearchValue,
    }
}
