import React from 'react'

type Props = {
    label:string;
    value:string;
}


export default function ListItem(props:Props) {
  const {label,value} = props;
    return (
    <div className=' w-full flex flex-row bg-gray-300  bg-opacity-40 p-3 rounded-md'>
        <div className=' flex flex-1 '>
            <p>{label}</p>
        </div>
        <div className=' flex flex-1 justify-end'>
            <p>{value}</p>
        </div>
    </div>
  )
}
