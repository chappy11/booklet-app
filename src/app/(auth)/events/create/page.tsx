"use client"

import { Button, DropDown, Maps, TextInput } from "@/app/_lib/components"
import { LatLng } from "@/app/_lib/components/Maps"
import useGetAllSemeseter from "@/app/_lib/hooks/useGetAllSemester"
import { DropDownType } from "@/app/_lib/types/DropDownType.type"
import { SemesterInterface } from "@/app/_lib/types/schema.type"
import { SemesterType } from "@/app/_lib/types/SemesterType.type"
import React, { useMemo, useState } from "react"
const center: LatLng = { lat: 10.057483126713738, lng: 124.1150815812587 }
export default function CreateEvents() {
    const [eventname, setEventname] = useState<string>("")
    const [morningCheckIn,setMorningCheckIn] = useState<string>("");
    const [morningCheckout,setMorningCheckOut] = useState<string>("");
    const [afternoonCheckIn,setAfternoonCheckIn] = useState<string>("");
    const [afternoonCheckout,setAfternoonCheckout] = useState<string>("");
    const [coordinate,setCoordinate] = useState<LatLng>(center);
    const [selectedSemester,setSelectedSemester] = useState<SemesterInterface | null>(null);
  
    const {data:semesters} = useGetAllSemeseter();
  
    const onMapChange = (e:LatLng) =>{
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
    return (
      <div className=" w-full">
        <div className=" w-full bg-white bg-opacity-50 p-5 h-full overflow-auto">
          <div className=" flex flex-row flex-1  gap-5">
            <div className=" flex flex-2 flex-col">
            <h1 className=" text-[#304F66] font-bold text-lg">Create Events</h1>
            <div className=" flex flex-col gap-5 mt-2 w-full ">
              <TextInput
                label="Event name"
                placeholder={"Enter event name.."}
                value={eventname}
                onChange={function (e: string): void {
                  throw new Error("Function not implemented.")
                }}
              />
              <TextInput label="Event Date" placeholder="" type="date" onChange={()=>{}}/>
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
                <h5 className=" text-[#304F66]">Morning</h5>
                <div className=" flex flex-row gap-5">
                  <TextInput
                    type="time"
                    label="Check In"
                    placeholder={"Enter event name.."}
                    value={morningCheckIn}
                    onChange={setMorningCheckIn}
                  />
                  <TextInput
                    type="time"
                    label="Checkout"
                    placeholder={"Enter event name.."}
                    value={morningCheckout}
                    onChange={setMorningCheckOut}
                  />
                 
                </div>
              </div>
              <div className=" flex flex-col gap-1">
                <h5 className=" text-[#304F66]">Afternoon</h5>
                  <div className=" flex flex-row gap-5">
                    <TextInput
                      type="time"
                      label="Check In"
                      placeholder={"Enter event name.."}
                      value={afternoonCheckIn}
                      onChange={setAfternoonCheckIn}
                    />
                    <TextInput
                      label="Check Out"
                      type='time'
                      placeholder={"Enter event name.."}
                      value={afternoonCheckout}
                      onChange={setAfternoonCheckout  }
                    />
                  </div>
                  
              </div>
               
               <Button title="Submit" />            
          </div>
            </div>
            <div className=" flex flex-1  ">
                <Maps latlng={center} isDraggable={true}  onMarkerChange={onMapChange} />
            </div>
          </div>
        
         
        </div>
      </div>
    )
}
