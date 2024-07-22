import React from 'react'

type Props = {
    children:React.ReactNode;
}

export default function TableRow(props:Props) {
  return (
   <tr className="border-b border-b-gray-50 border-opacity-50">{props.children}</tr>
  )
}
