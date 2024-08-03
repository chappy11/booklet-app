"use client"

import { Button } from "@/app/_lib/components"
import { Routes } from "@/app/_lib/types/route.enum"
import { useRouter } from "next/navigation"
import React from "react"

export default function CreateButton() {
  const router = useRouter()

  function handleCreateRecord() {
    router.push(`${Routes.STUDENTS}/create`)
  }
  return <Button title="Add New Record" onClick={handleCreateRecord} />
}
