import { Fragment } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { CustomSelectInput } from "@/components/CustomSelect/CustomSelectInput"
import { CustomSelectOptions } from "@/components/CustomSelect/CustomSelectOptions"
import { flip, useFloating } from "@floating-ui/react"
import { CustomScroll } from "@/components"
import { useCustomSelectFilter } from "@/hooks"

interface CustomSelectProps {
    options: (string | number)[]
    selected: string
    onSelectChange: (selected: string | number) => void
}

export function CustomSelect({
    options,
    selected,
    onSelectChange,
}: CustomSelectProps) {
    const { filteredOptions, setFilterQuery } = useCustomSelectFilter(options.map(option => ({ label: option.toString(), value: option })))

    const { refs, floatingStyles } = useFloating({
        middleware: [flip()],
    })
    
    const handleSelectChange = (value: string | number) => {
        onSelectChange(value)
    }

    return (
        <Combobox
            value={ selected }
            onChange={ handleSelectChange }
        >
            <div
                className="relative mt-1"
                ref={ refs.setReference }
            >
                <CustomSelectInput onChange={ setFilterQuery }/>
                <Transition
                    as={ Fragment }
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={ () => setFilterQuery("") }
                >
                    <Combobox.Options
                        className="absolute w-full overflow-hidden rounded-md bg-white text-base shadow focus:outline-none sm:text-sm z-10 flex max-h-[200px]"
                        ref={ refs.setFloating }
                        style={ floatingStyles }
                    >
                        <CustomScroll>
                            <CustomSelectOptions
                                options={ filteredOptions }
                            />
                        </CustomScroll>
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    )
}
