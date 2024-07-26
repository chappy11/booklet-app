import React, { useMemo } from 'react'
import { webroutes } from '../../constant/webroute'
import Item from './Item'

export default function SideBar() {
    const displayItems = useMemo(()=>{
      return webroutes.map((val) => {
        return <Item key={val.url} name={val.name} url={val.url} />
      })
    },[]);
    return (
        <div className=' w-1/6 rounded-t-lg rounded-bl-lg bg-white h-full py-5 bg-opacity-60'>
            <div className=' w-full flex justify-center'>
                <div className=' h-20  w-20 flex align-middle rounded-full bg-gray-400'/>
            </div>
            <div className='h-5'/>
            <ul className=' text-green-600'>
                {displayItems}
            </ul>
        </div>
    )
}
