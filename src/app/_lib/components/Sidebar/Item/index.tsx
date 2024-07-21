'use client';

import { RouteInterface, Routes } from '@/app/_lib/types/route.enum'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'



type Props = RouteInterface;

export default function Item(props:Props) {
    const {name,url} = props;
    const pathName = usePathname();
   
    const itemDesign = useMemo(()=>{
       const isActive = pathName === url;

       return isActive ? `bg-green-700 text-white rounded-r-full  mx-2 px-10 py-2 font-semibold text-sm`:` text-sm px-10 py-2 text-green-800 font-semibold`
    },[pathName,url]);


    return (
    <li className={itemDesign}><Link href={url}>{name}</Link></li>
  )
}
