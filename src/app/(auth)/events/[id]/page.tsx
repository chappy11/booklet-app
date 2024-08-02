import { Maps } from "@/app/_lib/components"
import { getEventById } from "@/app/_lib/services/Event.service"
import { DateFormat } from "@/app/_lib/types/DateFormat.enum"
import { PageParams } from "@/app/_lib/types/PageParams.type"
import { formatDate, formatTime } from "@/app/_lib/utils/date.utils"
import React from "react"

type Props = PageParams

export default async function EventById(props: Props) {
  const { params } = props
  const id = params.id

  const resp = await getEventById(id)

  return (
    <div className=" flex w-full h-full">
      <div className=" flex flex-row flex-1 gap-5">
        <div className=" w-[30%] bg-white bg-opacity-50 p-5 h-fit rounded-lg font-bold">
          <h1 className=" text-xl font-bold text-slate-800">
            {resp.eventName}
          </h1>
          <h3 className=" text-slate-700">
            {formatDate(resp.eventDate, DateFormat.FORMAT_DATE)}
          </h3>
          <div className=" h-5" />
          <p className=" text-slate-700">Morning Attendance</p>
          <p className=" text-sm text-slate-700">
            {formatTime(resp.morningCheckIn)} -{" "}
            {formatTime(resp.morningCheckOut)}
          </p>
          <div className=" h-5" />
          <p className=" text-slate-700">Afternoon Attendance</p>
          <p className=" text-sm text-slate-700">
            {formatTime(resp.afternoonCheckIn)} -{" "}
            {formatTime(resp.afternoonCheckOut)}
          </p>
          <div className="h-5" />
          <p className="text-sm text-slate-700">
            Minutes of break: {resp.numberOfMinuteBreak} mins
          </p>
          <div className="h-2" />
          <p className="text-sm text-slate-700">
            Semeseter: {resp.semester.semesterType}
          </p>
        </div>
        <div className=" flex flex-1">
          <Maps latlng={resp.coordinate} isDraggable={false} />
        </div>
      </div>
    </div>
  )
}
