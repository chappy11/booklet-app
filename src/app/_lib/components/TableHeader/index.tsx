import React from 'react'

type Props = {
    children:string
}

export default function TableHeader(props:Props) {
  return (
      <th scope="col" className="px-6 py-4 text-slate-500">{props.children}</th>
  )
}
