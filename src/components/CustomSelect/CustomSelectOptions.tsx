import { Combobox } from "@headlessui/react"

export type CustomSelectOption = {
    label: string
    value: string | number
}

export const CustomSelectOptions = ({
    options,
}: {
    options: CustomSelectOption[]
}) => {
    return (
        <>
            {
                options.map((option) => (
                    <Combobox.Option
                        key={ option.value }
                        className={ ({ active }) =>
                            (
                                [
                                    "relative cursor-default select-none py-2 px-4",
                                    active ? "bg-blue-600 text-white" : "text-gray-900",
                                    typeof option === "string" ? "text-center" : ""
                                ].join(" ")
                            )
                        }
                        value={ option.value }
                    >
                        {({ selected }) => (
                            <span
                                className={
                                    [
                                        "block truncate",
                                        selected ? "font-bold" : "font-normal",
                                    ].join(" ")
                                }
                            >
                                { option.label }
                            </span>
                        )}
                    </Combobox.Option>
                ))
            }
        </>
    )
}
