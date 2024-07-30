"use client"

import React from "react"

import { Maps } from "@/app/_lib/components"
import { LatLng } from "@/app/_lib/components/Maps"
const center: LatLng = { lat: 10.057483126713738, lng: 124.1150815812587 }

export default function Events() {
  return (
    <div className=" flex flex-1 flex-col">
      <p>Events</p>
      <Maps latlng={center} isDraggable={true} onMarkerChange={() => {}} />
    </div>
  )
}
