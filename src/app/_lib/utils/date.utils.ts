import dayjs from "dayjs"
import { DateFormat } from "../types/DateFormat.enum"

export const formatDate = (date: Date | string, format: DateFormat) => {
  return dayjs(date).format(format)
}
