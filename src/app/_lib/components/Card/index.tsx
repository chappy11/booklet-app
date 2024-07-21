import React from 'react'

type Props = {
    children:React.ReactNode;
}

export default function Card(props:Props) {
  const {children} = props;
  return (
    <div className=' bg-white p-2 rounded-sm'>{children}</div>
  )
}
