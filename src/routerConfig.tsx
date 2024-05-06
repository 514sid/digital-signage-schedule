import { Layout, PlaylistLayout, ScreenLayout } from "@/layouts"
import { ScreensPage, PlaylistsPage, PlaylistScheduleEditor, PlaylistsPriorityManager, ScreenSchedule, PlaylistPage, PlaylistScreenManager, ScreenPlaylists } from "@/pages"
import { PlaylistProvider, ScreenProvider } from "@/providers"

const playlistRoutes = [
    {
        path: "",
        element: <PlaylistPage />
    },
    {
        path: "schedule",
        element: <PlaylistScheduleEditor />,
    },
    {
        path: "screens",
        element: <PlaylistScreenManager />
    }
]

const playlistsRoutes = [
    {
        path: "",
        element: <PlaylistsPage />,
    },
    {
        path: "priority",
        element: <PlaylistsPriorityManager />,
    },
    {
        path: ":playlistId",
        element: <PlaylistProvider />,
        children: [
            {
                element: <PlaylistLayout />,
                children: playlistRoutes
            }
        ]
    }
]

const screenRoutes = [
    {
        path: "",
        element: <ScreenSchedule />,
    },
    {
        path: "playlists",
        element: <ScreenPlaylists />
    }
]

export const routes = [
    {
        element: <Layout />,
        children: [
            {
                path: "",
                element: <ScreensPage />
            },
            {
                path: "playlists",
                children: playlistsRoutes,
            },
            {
                path: "screens/:screenId",
                element: <ScreenProvider />,
                children: [
                    {
                        element: <ScreenLayout />,
                        children: screenRoutes
                    }
                ]
            },
        ]
    }
]
