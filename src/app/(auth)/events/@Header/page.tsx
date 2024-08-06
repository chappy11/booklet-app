"use client"

import { Button } from "@/app/_lib/components"
import { Routes } from "@/app/_lib/types/route.enum"
import { useRouter } from "next/navigation"
import React from "react"

export default function Header() {
  const router = useRouter()

  function handleNavigate() {
    router.push(`${Routes.EVENTS}/create`)
  }
  return (
    <div className=" w-full flex justify-end">
      <div>
        <Button title="Add New Record" onClick={handleNavigate} />
      </div>
    </div>
  )
}
