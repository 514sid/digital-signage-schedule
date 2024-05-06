import { Combobox } from "@headlessui/react"
import { ChevronUpDownIcon } from "@heroicons/react/20/solid"

export const CustomSelectInput = ({
    onChange,
}: {
    onChange: (value: string) => void
}) => {
    return (
        <div className="relative overflow-hidden rounded-lg text-left outline-none">
            <Combobox.Input
                className="w-full border-none py-2 pl-4 pr-3 leading-5 text-gray-900 focus:outline-none bg-neutral-100 focus:bg-neutral-200 transition-colors"
                displayValue={ (value: string) => value }
                onChange={ (event) => onChange(event.target.value) }
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
            </Combobox.Button>
        </div>
    )
}