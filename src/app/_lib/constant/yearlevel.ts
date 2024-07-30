import { DropDownType } from "../types/DropDownType.type"
import { getYearLevel } from "../utils/string.utils"

export const getAllYearLevel: DropDownType[] = Array.from(
  { length: 5 },
  (_, i) => i + 1
).map((val) => {
  return {
    label: getYearLevel(val),
    value: val.toString(),
  }
})
