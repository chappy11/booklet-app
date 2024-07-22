import React from 'react'

type Props = {
    children: string | React.ReactNode;
}

export default function TableData(props:Props) {
  return (
   <td className="px-6 py-4 text-slate-700  text-opacity-90 bg-white opacity-75">{props.children}</td>
  )
}
