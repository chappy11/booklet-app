import React from 'react'
import { PageComponent, SideBar } from '../_lib/components';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-full  overflow-x-hidden flex flex-row bg-gradient-to-br  from-[#329D9C] to-[#56C596]  bg-no-repeat h-full'>
         <div className=" flex flex-row w-[85%] m-auto  h-[90%]  bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
            <SideBar/>
            <PageComponent>
                {children}
            </PageComponent>
         </div>
    </main>
  )
}
