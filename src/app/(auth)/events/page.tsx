import React from "react"

import { Maps } from "@/app/_lib/components"
import { LatLng } from "@/app/_lib/components/Maps"
import EventData from "./@EventData/page"
import Header from "./@Header/page"

export default function Events() {
  return (
    <div className=" flex flex-1 flex-col gap-5">
      <Header />
      <EventData />
    </div>
  )
}
