import React from 'react'
import Header from './Header';

type Props = {
    children:React.ReactNode
}

export default function PageComponent(props:Props) {
    const {children} = props;
  return (
    <div className=' w-full h-full'>
        <Header/>
        <div className=' flex flex-1 p-3 '>
            {children}
        </div>     
    </div>
    
  )
}
