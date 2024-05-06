import { Tab } from "@/types"
import { NavLink } from "react-router-dom"

export const PageTab = ({
    to,
    name,
    counter,
}: Tab) => {
    return (
        <NavLink
            to={ to }
            className={ ({ isActive }) =>
                [
                    "px-3 sm:px-7 h-10 sm:h-14 flex gap-3.5 items-center border-b-2 border-transparent transition-colors ease-in-out font-bold select-none text-sm sm:text-base",
                    isActive ? "border-black text-black" : "text-neutral-400 hover:text-black"
                ].join(" ")
            }
            draggable={ false }
            end
        >
            <div>{name}</div>
            {counter && counter > 0 && (
                <div>
                    {counter}
                </div>
            )}
        </NavLink>
    )
}
