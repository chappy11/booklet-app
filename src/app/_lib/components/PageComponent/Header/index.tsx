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

        if(pathname === Routes.COURSE){
            return "Courses"
        }

        if(pathname === Routes.SEMESTER){
            return "Semester"
        }

    },[pathname])
    return (
        <div className=' w-full flex flex-1  px-3 py-2 flex-row '>
            <div className='  flex  flex-1 items-center'>
                <p className=' text-2xl font-semibold text-white'>{displayData}</p>
            </div>
            <div className=' flex items-center px-3 text-gray-700 flex flex-row gap-3'>
                <div className=' h-9 w-9 rounded-full bg-gray-600'/>
                <p className=' text-white font-semibold'>Hello Admin</p>
            </div>
        </div>
    );
}
