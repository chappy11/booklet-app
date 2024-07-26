'use client';

import { RouteInterface, Routes } from '@/app/_lib/types/route.enum'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'

type Props = RouteInterface

export default function Item(props: Props) {
  const { name, url } = props
  const pathName = usePathname()

  const itemDesign = useMemo(() => {
    const currentPath = pathName.split("?")[0]
    const currentUrl = url.split("?")[0]
    const isActive = currentPath === currentUrl

    console.log("pathn", pathName.split("?"))
    return isActive
      ? `bg-[#304F66] text-white rounded-r-full  mx-2 px-10 py-2 font-semibold text-sm`
      : ` text-sm px-10 py-2 text-[#304F66] font-semibold`
  }, [pathName, url])

  return (
    <li className={itemDesign}>
      <Link href={url}>{name}</Link>
    </li>
  )
}
