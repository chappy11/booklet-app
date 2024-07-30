"use client"

import { TextInput } from "@/app/_lib/components"
import React, { useState } from "react"

export default function CreateEvents() {
    const [eventname, setEventname] = useState<string>("")
    const [minimumMorningCheckIn, setMinimumMorningCheckIn] =
      useState<string>("")
    const [maximumMorningCheckIn, setMaximumMorningCheckIn] =
      useState<string>("")
    const [minimumAfterNoonCheckout, setMinimumAfterNoonCheckout] =
      useState<string>("")
    const [maximumAfterNoonCheckout, setMaximumAfterNoonCheckout] =
      useState<string>("")
    const [minimumAfterNoonCheckIn, setMinimumAfterNoonCheckIn] =
      useState<string>("")
    const [maximumAfterNoonCheckIn, setMaximumAfterNoonCheckIn] =
      useState<string>("")

    const [minimumOut, setMinimumOut] = useState<string>("")
    const [maximumOut, setMaximumOut] = useState<string>("")

    console.log(minimumMorningCheckIn)
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
                label="Minimum Check In"
                placeholder={"Enter event name.."}
                value={minimumMorningCheckIn}
                onChange={setMinimumMorningCheckIn}
              />
              <TextInput
                type="time"
                label="Maximum Check In"
                placeholder={"Enter event name.."}
                value={maximumMorningCheckIn}
                onChange={setMaximumMorningCheckIn}
              />
            </div>
            <div className=" flex flex-row gap-5">
              <TextInput
                type="time"
                label="Minimum Check In"
                placeholder={"Enter event name.."}
                value={minimumAfterNoonCheckout}
                onChange={setMinimumAfterNoonCheckout}
              />
              <TextInput
                label="Maximum Check In"
                placeholder={"Enter event name.."}
                value={maximumAfterNoonCheckout}
                onChange={setMaximumAfterNoonCheckout}
              />
            </div>
            <div className=" flex flex-row gap-5">
              <TextInput
                type="time"
                label="Minimum Check In"
                placeholder={"Enter event name.."}
                value={minimumAfterNoonCheckIn}
                onChange={setMinimumAfterNoonCheckIn}
              />
              <TextInput
                label="Maximum Check In"
                placeholder={"Enter event name.."}
                value={eventname}
                onChange={setMaximumAfterNoonCheckIn}
              />
            </div>
            <div className=" flex flex-row gap-5">
              <TextInput
                type="time"
                label="Minimum Check In"
                placeholder={"Enter event name.."}
                value={minimumOut}
                onChange={setMinimumOut}
              />
              <TextInput
                label="Maximum Check In"
                placeholder={"Enter event name.."}
                value={maximumOut}
                onChange={setMaximumOut}
              />
            </div>
          </div>
        </div>
      </div>
    )
}
