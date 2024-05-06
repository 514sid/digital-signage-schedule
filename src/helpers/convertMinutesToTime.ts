export function convertMinutesToTime(minutes: number): string {
    let hours: number | string = Math.floor(minutes / 60)
    let remainingMinutes: number | string = minutes % 60
    
    hours = ("0" + hours).slice(-2)
    remainingMinutes = ("0" + remainingMinutes).slice(-2)
    
    return `${hours}:${remainingMinutes}`
}