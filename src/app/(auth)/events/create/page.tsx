"use client"

import { TextInput } from "@/app/_lib/components"
import React, { useState } from "react"

export default function CreateEvents() {
  const [eventname, setEventname] = useState<string>("")
  return (
    <div className=" w-full">
      <div className=" w-1/2 bg-white bg-opacity-50 p-5 m-auto">
        <h1>Create Events</h1>
        <div className=" flex flex-col gap-5">
          <TextInput
            label="Event name"
            placeholder={"Enter event name.."}
            value={eventname}
            onChange={function (e: string): void {
              throw new Error("Function not implemented.")
            }}
          />
          <div className=" flex flex-row gap-5">
            <TextInput
              type="time"
              label="Time In"
              placeholder={"Enter event name.."}
              value={eventname}
              onChange={function (e: string): void {
                throw new Error("Function not implemented.")
              }}
            />
            <TextInput
              label="Event name"
              placeholder={"Enter event name.."}
              value={eventname}
              onChange={function (e: string): void {
                throw new Error("Function not implemented.")
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
