
import React from 'react'

type Props = {
  placeholder: string
  value: string
  onChange: (e: string) => void
  type?: string
  label?: string
  maxLength?: number
}

export default function TextInput(props: Props) {
  const {
    placeholder,
    value,
    onChange,
    type = "text",
    label,
    maxLength,
  } = props

  return (
    <div className=" w-full">
      {label && <label className=" mx-2 text-sm text-[#304F66]">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" outline-none px-3 py-2 rounded-xl text-slate-600 bg-white bg-opacity-35 border border-white w-full placeholder-slate-500"
        maxLength={maxLength}
      />
    </div>
  )
}
