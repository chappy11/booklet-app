import React from 'react'

type Props = {
  id?: string
  children: React.ReactNode
}

export default function TableRow(props:Props) {
  return (
    <tr className="border-b border-b-gray-50 border-opacity-50" key={props.id}>
      {props.children}
    </tr>
  )
}
