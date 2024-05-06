import { XMarkIcon } from "@heroicons/react/20/solid"
import { SearchInputProps } from "@/types"

export const ItemsSearch = ({
    inputProps,
    handleReset,
    hasSearchValue,
}: {
    inputProps: SearchInputProps,
    handleReset: () => void,
    hasSearchValue: boolean
}) => (
    <div className="flex gap-5 items-center">
        <input
            name="search"
            { ...inputProps }
            className="h-12 focus:outline-none px-5 font-medium bg-transparent text-xl"
            placeholder="Search"
            autoComplete="off"
        />
        {hasSearchValue && (
            <button
                onClick={ handleReset }
                className="flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 w-10 h-10 rounded-lg transition font-semibold shrink-0 text-nowrap"
            >
                <XMarkIcon className="w-5 h-5" />
            </button>
        )}
    </div>
)