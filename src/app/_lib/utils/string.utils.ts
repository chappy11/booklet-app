export const getYearLevel = (year: number, includeYear?: boolean) => {
  let yearLevel = ""

  switch (year) {
    case 1:
      yearLevel = "1st"
      break
    case 2:
      yearLevel = "2nd"
      break
    case 3:
      yearLevel = "3rd"
      break
    case 4:
      yearLevel = "4th"
      break
    case 5:
      yearLevel = "5th"
      break
    default:
      yearLevel = ""
      break
  }

  if (includeYear) {
    return yearLevel + " year"
  }

  return yearLevel
}

export function isNumeric(value: string) {
  return /^\d+$/.test(value)
}
