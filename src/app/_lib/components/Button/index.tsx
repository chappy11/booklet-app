"use client";

import { useMemo } from "react"
import { ButtonType } from "../../types/ButtonType.enum"

type Props = {
  title: string
  onClick?: () => void
  type?: ButtonType
}

export default function Button(props: Props) {
  const { title, onClick, type = ButtonType.SOLID } = props

  const buttonDesign: string = useMemo(() => {
    if (type === ButtonType.SOLID) {
      return ` p-3 hover:bg-white hover:border hover:border-[#304F66] hover:text-[#304F66] w-full max-h-16 bg-[#304F66]  bg-opacity-90  text-white rounded-md`
    }

    return ` p-3  w-full max-h-16 bg-white text-[#304F66] border border-[#304F66] rounded-md hover:bg-[#304F66] bg-opacity-45 hover:text-white`
  }, [type])

  return (
    <button onClick={() => onClick?.()} className={buttonDesign}>
      {title}
    </button>
  )
}
