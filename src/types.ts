import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { PlaylistModel } from "@/models"

export type Weekday = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN"

export type Range = {
    start: string
    end: string
} | null

export type Playlist = {
    id: string
    name: string
    priority: number
    dateRange: Range
    timeRange: Range
    weekdays: Weekday[] | null
    screens: string[]
}

export type Screen = {
    id: string
    name: string
    playlists: PlaylistModel[]
    timezone: string
}

export type SearchInputProps = Pick<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "value" | "onChange" | "onKeyDown"
>;

export type Tab = {
    to: string;
    name: string;
    counter?: number;
}