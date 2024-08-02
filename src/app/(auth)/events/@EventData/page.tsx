import { TableHeader, TableRow, TableData } from "@/app/_lib/components"
import { getEvents } from "@/app/_lib/services/Event.service"
import { DateFormat } from "@/app/_lib/types/DateFormat.enum"
import { Routes } from "@/app/_lib/types/route.enum"
import { CourseType, EventResponse } from "@/app/_lib/types/schema.type"
import { formatDate, formatTime } from "@/app/_lib/utils/date.utils"
import Link from "next/link"
import React from "react"

export default async function EventData() {
  const dataToDisplay = await getEvents()

  return (
    <div className=" w-full">
      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader>Event</TableHeader>
            <TableHeader>Event Date</TableHeader>
            <TableHeader>Semester Type</TableHeader>
            <TableHeader>Morning Attendance</TableHeader>
            <TableHeader>Afternoon Attendance</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody className=" w-full">
          {dataToDisplay?.map((val: EventResponse, i: number) => {
            return (
              <TableRow key={i.toString()}>
                <TableData>{val.eventName}</TableData>
                <TableData>
                  {formatDate(val.eventDate, DateFormat.FORMAT_DATE)}
                </TableData>
                <TableData>{val.semester.semesterType}</TableData>
                <TableData>
                  {formatTime(val.morningCheckIn) +
                    " - " +
                    formatTime(val.morningCheckOut)}
                </TableData>
                <TableData>
                  {formatTime(val.afternoonCheckIn) +
                    " - " +
                    formatTime(val.afternoonCheckOut)}
                </TableData>
                <TableData>
                  <Link href={`${Routes.EVENTS}/${val.id}`}>View</Link>
                </TableData>
              </TableRow>
            )
          })}
        </tbody>
      </table>
      {/* <Pagination
        currentPage={page}
        dataCounts={data.length}
        baseUrl={`${Routes.COURSE}`}
      /> */}
    </div>
  )
}
