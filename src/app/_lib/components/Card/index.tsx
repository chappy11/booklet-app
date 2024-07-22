import React from 'react'

type Props = {
    children:React.ReactNode;
}

export default function Card(props:Props) {
  const {children} = props;
  return (
    <div className='  p-2 rounded-sm w-full bg-white bg-opacity-60 h-fit'>{children}</div>
  )
}
