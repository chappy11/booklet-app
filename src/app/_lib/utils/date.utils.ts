import dayjs from "dayjs"
import { DateFormat } from "../types/DateFormat.enum"

export const formatDate = (date: Date | string, format: DateFormat) => {
  return dayjs(date).format(format)
}


export const formatTime = (input: string) => {
  const timeStamp = input.split(":")
  const hr = parseInt(timeStamp[0])
  const min = timeStamp[1]
  const isAMPM = hr >= 12 ? "PM" : "AM"
  if (hr > 12) {
    const totalHr = hr - 12
    const displayHr = totalHr.toString().length > 1 ? totalHr : `0${totalHr}`
    return `${displayHr}:${min} ${isAMPM}`
  }
  if (hr < 1) {
    return `${hr + 12}:${min} ${isAMPM}`
  }
  return `${hr}:${min} ${isAMPM}`
}