import { DropDownType } from "../types/DropDownType.type"

export const GENDER = ["Male", "Female"]

export const GenderDropDownData: DropDownType[] = GENDER.map((val) => {
  return {
    label: val.toUpperCase(),
    value: val,
  }
})
