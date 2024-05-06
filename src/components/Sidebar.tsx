import { NavLink } from "react-router-dom"
import { ComputerDesktopIcon, RectangleStackIcon } from "@heroicons/react/24/solid"

type MenuLink = {
    name: string
    route: string
    icon: JSX.Element
}

const GithubItem = () => {
    return (
        <a
            href="https://github.com/514sid/digital-signage-schedule"
            target="_blank"
            className="hover:bg-neutral-100 text-neutral-700 flex gap-4 w-14 h-14 items-center justify-center rounded-xl font-semibold transition-colors"
            rel="noreferrer"
        >
            <GithubIcon />
            <span className="hidden">GitHub</span>
        </a>
    )
}

const NavItem = ({ menuLink }: { menuLink: MenuLink }) => {
    return (
        <NavLink
            to={ menuLink.route }
            className={ ({ isActive }) =>
                [
                    isActive ? "text-blue-600" : "text-neutral-700",
                    "hover:bg-neutral-100 flex gap-4 w-14 h-14 items-center justify-center rounded-xl font-semibold transition-colors"
                ].join(" ")
            }
            draggable={ false }
            end
        >
            {menuLink.icon}
            <span className="hidden">{menuLink.name}</span>
        </NavLink>
    )
}

const SidebarContainer = ({ menuLinks }: { menuLinks: MenuLink[] }) => {
    return (
        <>
            <div className="sticky top-0 h-full max-h-screen p-2 flex-col hidden md:flex justify-between">
                <div className="grid grid-cols-1">
                    {menuLinks.map((menuLink, i) => (
                        <NavItem
                            key={ `nav-${i}` }
                            menuLink={ menuLink }
                        />
                    ))}
                </div>
                <div>
                    <GithubItem />
                </div>
            </div>
            <div className="flex w-full justify-around md:hidden p-2 bg-white">
                {menuLinks.map((menuLink, i) => (
                    <NavItem
                        key={ `nav-${i}` }
                        menuLink={ menuLink }
                    />
                ))}
                <GithubItem />
            </div>
        </>
        
    )
}

const GithubIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91c.575.101.79-.244.79-.546c0-.273-.014-1.178-.014-2.142c-2.889.532-3.636-.704-3.866-1.35c-.13-.331-.69-1.352-1.18-1.625c-.402-.216-.977-.748-.014-.762c.906-.014 1.553.834 1.769 1.179c1.035 1.74 2.688 1.25 3.349.948c.1-.747.402-1.25.733-1.538c-2.559-.287-5.232-1.279-5.232-5.678c0-1.25.445-2.285 1.178-3.09c-.115-.288-.517-1.467.115-3.048c0 0 .963-.302 3.163 1.179c.92-.259 1.897-.388 2.875-.388c.977 0 1.955.13 2.875.388c2.2-1.495 3.162-1.179 3.162-1.179c.633 1.581.23 2.76.115 3.048c.733.805 1.179 1.825 1.179 3.09c0 4.413-2.688 5.39-5.247 5.678c.417.36.776 1.05.776 2.128c0 1.538-.014 2.774-.014 3.162c0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25C24 5.896 18.854.75 12.5.75"
            />
        </svg>
    )
} 
const generateMenuLinks = () => {
    return [
        {
            name: "Screens",
            route: "",
            icon: <ComputerDesktopIcon className="w-6 h-6" />,
        },
        {
            name: "Playlists",
            route: "playlists",
            icon: <RectangleStackIcon className="w-6 h-6" />,
        },
    ]
}

export const Sidebar = () => {
    const menuLinks = generateMenuLinks()
    return <SidebarContainer menuLinks={ menuLinks } />
}