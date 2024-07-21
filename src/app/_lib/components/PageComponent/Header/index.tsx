"use client";

import { Routes } from '@/app/_lib/types/route.enum';
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

export default function Header() {
    const pathname = usePathname();

    const displayData = useMemo(()=>{
        if(pathname === Routes.DASHBOARD){
            return "Dashboard";
        }

        if(pathname === Routes.STUDENTS){
            return "Students"
        }

        if(pathname === Routes.EVENTS){
            return "Events"
        }

    },[pathname])
    return (
        <div className=' w-full flex flex-1  px-3 py-2 flex-row '>
            <div className='  flex  flex-1 items-center'>
                <p className=' text-lg font-semibold text-gray-700'>{displayData}</p>
            </div>
            <div className=' flex items-center px-3 text-gray-700 flex flex-row gap-3'>
                <div className=' h-9 w-9 rounded-full bg-gray-600'/>
                <p>Hello Admin</p>
            </div>
        </div>
    );
}
