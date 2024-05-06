import defaultTheme from "tailwindcss/defaultTheme"
import { blackA, mauve } from "@radix-ui/colors"

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ["Manrope", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                ...blackA,
                ...mauve,
            }
        }
    },
    plugins: [],
}