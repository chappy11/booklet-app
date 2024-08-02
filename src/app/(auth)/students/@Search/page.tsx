"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"

export default function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  function handleOnChange(input: string) {
    const params = new URLSearchParams(searchParams)
    if (input) {
      params.set("query", input)
    } else {
      params.delete("query")
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <input
      type="text"
      onChange={(e) => handleOnChange(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  )
}
