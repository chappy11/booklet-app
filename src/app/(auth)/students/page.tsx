import { TableHeader } from "@/app/_lib/components"
import { getStudents } from "@/app/_lib/services/Student.service"
import React from "react"
import StudentList from "./@StudentList/page"
import { PageParams } from "@/app/_lib/types/PageParams.type"

type Props = PageParams

export default function Student(props: Props) {
  const { page } = props.searchParams

  return (
    <div className=" w-full">
      <p>Student List</p>
      <StudentList currentPage={page} />
    </div>
  )
}
