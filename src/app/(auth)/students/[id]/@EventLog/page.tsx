import { TableData, TableHeader, TableRow } from "@/app/_lib/components"
import { getEventLogByStudentId } from "@/app/_lib/services/EventLogs.service"
import { EventLogsResponse } from "@/app/_lib/types/schema.type"
import React from "react"

export type Props = {
  studentId: string
}

export default async function EventLog(props: Props) {
  const { studentId } = props
  const data = await getEventLogByStudentId(studentId)

  return (
    <div className=" w-full">
      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader>Eventname</TableHeader>
            <TableHeader>Morning In</TableHeader>
            <TableHeader>Morning Out</TableHeader>
            <TableHeader>Afternoon In</TableHeader>
            <TableHeader>Afternoon Out</TableHeader>
          </tr>
        </thead>
        <tbody className=" w-full">
          {data.map((val: EventLogsResponse) => {
            return (
              <TableRow>
                <TableData>{val.event.eventName}</TableData>
                <TableData>
                  {val.eventRecord[0] ? val.eventRecord[0].value : ""}
                </TableData>
                <TableData>
                  {val.eventRecord[1] ? val.eventRecord[1].value : ""}
                </TableData>
                <TableData>
                  {val.eventRecord[2] ? val.eventRecord[2].value : ""}
                </TableData>
                <TableData>
                  {val.eventRecord[3] ? val.eventRecord[3].value : ""}
                </TableData>
              </TableRow>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
