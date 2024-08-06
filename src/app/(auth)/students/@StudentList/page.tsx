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
  StudentPayload,
  StudentResponse,
} from "@/app/_lib/types/schema.type"
import { formatDate } from "@/app/_lib/utils/date.utils"
import Link from "next/link"
import React from "react"

type Props = {
  currentPage: string
  query:string;
}

export default async function StudentList(props: Props) {
  const { currentPage,query } = props
  const students = await getStudents()

  const studentList = () =>{
    if(!query){
      return students;
    }

    const filterData = students.filter((val:StudentPayload)=>{
      const firstName = val.firstname ? val.firstname.toUpperCase() : "".toUpperCase();
      const middlename = val.middlename ? val.middlename.toUpperCase() : "".toUpperCase();
      const lastname = val.lastname ? val.lastname.toUpperCase() : "".toUpperCase();

      const searchText = query.toUpperCase();

      const isFirstName = firstName.indexOf(searchText) > -1;
      const isMiddleName = middlename.indexOf(searchText) > -1;
      const isLastName = lastname.indexOf(searchText) > -1;

      return isFirstName || isMiddleName || isLastName;
    })
  
    return filterData;
  }
  return (
    <div className=" w-full">
      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader>ID NO</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Course</TableHeader>
            <TableHeader>Semester</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody className=" w-full">
          {studentList()?.map((val: StudentResponse, i: number) => {
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
                <TableData>
                  <Link className=" text-green-900 hover:text-green-700 text-md underline" href={`${Routes.STUDENTS}/${val.id}`}>View</Link>
                </TableData>
              </TableRow>
            )
          })}
        </tbody>
      </table>
      <div className=" h-5" />
      <Pagination
        currentPage={parseInt(currentPage)}
        dataCounts={studentList().length}
        baseUrl={Routes.STUDENTS}
      />
    </div>
  )
}
