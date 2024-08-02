"use client"

import { Button, DropDown, Maps, TextInput } from "@/app/_lib/components"
import { LatLng } from "@/app/_lib/components/Maps"
import useGetAllSemeseter from "@/app/_lib/hooks/useGetAllSemester"
import { createEvent } from "@/app/_lib/services/Event.service"
import { DropDownType } from "@/app/_lib/types/DropDownType.type"
import { EventInterface, SemesterInterface } from "@/app/_lib/types/schema.type"
import { SemesterType } from "@/app/_lib/types/SemesterType.type"
import React, { useMemo, useState } from "react"
import { toast } from "react-toastify"
const center: LatLng = { lat: 10.057483126713738, lng: 124.1150815812587 }
export default function CreateEvents() {
  const [eventname, setEventname] = useState<string>("")
  const [morningCheckIn, setMorningCheckIn] = useState<string>("")
  const [morningCheckout, setMorningCheckOut] = useState<string>("")
  const [afternoonCheckIn, setAfternoonCheckIn] = useState<string>("")
  const [afternoonCheckout, setAfternoonCheckout] = useState<string>("")
  const [coordinate, setCoordinate] = useState<LatLng>(center)
  const [selectedSemester, setSelectedSemester] =
    useState<SemesterInterface | null>(null)
  const [eventDate, setEventDate] = useState<string>("")
  const [noOfBreakTime, setNoOfBreakTime] = useState<string>("0")

  const { data: semesters } = useGetAllSemeseter()

  const onMapChange = (e: LatLng) => {
    setCoordinate(e)
  }

  const semesterData = useMemo(() => {
    if (!semesters) {
      return []
    }
    return semesters.map((val) => {
      return {
        label: val.semesterType,
        value: val.id,
      }
    })
  }, [semesters])

  const onChangeSelectSemester = (e: string) => {
    const filterItem = semesters.filter((val) => val.id === e)[0]

    setSelectedSemester(filterItem)
  }

  const isDataValid = () => {
    let isValid = true

    if (!eventname) {
      console.log("WEW")
      toast.error("Event name is required")

      isValid = false
    }

    if (!eventDate) {
      toast.error("Event date is required")

      isValid = false
    }

    if (!morningCheckIn) {
      toast.error("Morning check in is required")

      isValid = false
    }

    if (!morningCheckout) {
      toast.error("Morning check out is required")

      isValid = false
    }

    if (!afternoonCheckIn) {
      toast.error("Afternoon check in is required")

      isValid = false
    }

    if (!afternoonCheckout) {
      toast.error("Afternoon check out is required")

      isValid = false
    }

    if (parseFloat(noOfBreakTime) < 5 || !noOfBreakTime) {
      toast.error("Number of Afternoon break is required")

      isValid = false
    }

    return isValid
  }

  async function handleSubmit() {
    if (!isDataValid()) {
      return
    }

    try {
      const payload: EventInterface = {
        eventName: eventname,
        eventDate: eventDate,
        semesterId: selectedSemester?.id as string,
        morningCheckIn: morningCheckIn,
        morningCheckOut: morningCheckout,
        afternoonCheckIn: afternoonCheckIn,
        afternoonCheckOut: afternoonCheckout,
        numberOfMinuteBreak: parseFloat(noOfBreakTime),
        coordinate: coordinate,
        dateCreated: new Date().toString(),
      }

      const resp = await createEvent(payload)

      if (resp) {
        toast.success("Successfully Submitted")
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div className=" w-full">
      <div className=" w-full bg-white bg-opacity-50 p-5 h-full overflow-auto rounded-lg">
        <div className=" flex flex-row flex-1  gap-5">
          <div className=" flex flex-2 flex-col">
            <h1 className=" text-[#304F66] font-bold text-lg">Create Events</h1>
            <div className=" flex flex-col gap-5 mt-2 w-full ">
              <TextInput
                label="Event name"
                placeholder={"Enter event name.."}
                value={eventname}
                onChange={setEventname}
              />
              <TextInput
                label="Event Date"
                placeholder=""
                type="date"
                value={eventDate}
                onChange={setEventDate}
              />
              <DropDown
                label={"Semester"}
                placeholder="Choose Semester"
                data={semesterData as DropDownType[]}
                onChange={onChangeSelectSemester}
                value={
                  selectedSemester
                    ? selectedSemester.semesterType
                    : "Choose Semester"
                }
              />

              <div className=" flex flex-col gap-1">
                <div className=" flex flex-row gap-5">
                  <TextInput
                    type="time"
                    label="Morning Time In"
                    placeholder={"Enter event name.."}
                    value={morningCheckIn}
                    onChange={setMorningCheckIn}
                  />
                  <TextInput
                    type="time"
                    label="Morning Time out"
                    placeholder={"Enter event name.."}
                    value={morningCheckout}
                    onChange={setMorningCheckOut}
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-1">
                <div className=" flex flex-row gap-5">
                  <TextInput
                    type="time"
                    label="Afternoon Check in"
                    placeholder={"Enter event name.."}
                    value={afternoonCheckIn}
                    onChange={setAfternoonCheckIn}
                  />
                  <TextInput
                    label="Afternoon Checkout"
                    type="time"
                    placeholder={"Enter event name.."}
                    value={afternoonCheckout}
                    onChange={setAfternoonCheckout}
                  />
                </div>
              </div>
              <TextInput
                placeholder={"0"}
                label="No. of break (min)"
                value={noOfBreakTime}
                onChange={setNoOfBreakTime}
              />
              <Button title="Submit" onClick={handleSubmit} />
            </div>
          </div>
          <div className=" flex flex-1  ">
            <Maps
              latlng={coordinate}
              isDraggable={true}
              onMarkerChange={onMapChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
