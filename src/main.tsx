import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "@/routerConfig"
import "@/index.css"

const router = createBrowserRouter(routes)

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider
            router={ router }
        />
    </React.StrictMode>,
)
