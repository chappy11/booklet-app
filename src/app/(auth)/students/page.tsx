import React from "react"
import StudentList from "./@StudentList/page"
import { PageParams } from "@/app/_lib/types/PageParams.type"
import Search from "./@Search/page"

type Props = PageParams

export default function Student(props: Props) {
  const { page, query } = props.searchParams

  console.log("QUEYR", query)

  return (
    <div className=" w-full">
      <Search />
      <StudentList currentPage={page} />
    </div>
  )
}
