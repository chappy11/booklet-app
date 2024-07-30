import {
  TableHeader,
  TableRow,
  TableData,
  Pagination,
} from "@/app/_lib/components"
import { getStudents } from "@/app/_lib/services/Student.service"
import { DateFormat } from "@/app/_lib/types/DateFormat.enum"
import { Routes } from "@/app/_lib/types/route.enum"
import {
  SemesterInterface,
  StudentResponse,
} from "@/app/_lib/types/schema.type"
import { formatDate } from "@/app/_lib/utils/date.utils"
import React from "react"

type Props = {
  currentPage: string
}

export default async function StudentList(props: Props) {
  const { currentPage } = props
  const students = await getStudents()
  return (
    <div className=" w-full">
      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader>ID NO</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Course</TableHeader>
            <TableHeader>Semester</TableHeader>
          </tr>
        </thead>
        <tbody className=" w-full">
          {students?.map((val: StudentResponse, i: number) => {
            return (
              <TableRow key={i.toString()}>
                <TableData key={i.toString()}>{val.idNo}</TableData>
                <TableData key={i.toString()}>
                  {val.firstname + " " + val.middlename + " " + val.lastname}
                </TableData>
                <TableData key={i.toString()}>
                  {val.course.courseCode}
                </TableData>
                <TableData key={i.toString()}>
                  {val.semester.semesterType}
                </TableData>
              </TableRow>
            )
          })}
        </tbody>
      </table>
      <div className=" h-5" />
      <Pagination
        currentPage={parseInt(currentPage)}
        dataCounts={students.length}
        baseUrl={Routes.STUDENTS}
      />
    </div>
  )
}
