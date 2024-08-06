import React from "react"
import StudentList from "./@StudentList/page"
import { PageParams } from "@/app/_lib/types/PageParams.type"
import Search from "./@Search/page"
import CreateButton from "./@CreateButton/page"

type Props = PageParams

export default function Student(props: Props) {
  const { page, query } = props.searchParams

  return (
    <div className=" w-full flex flex-col gap-5">
      <div className=" flex w-full flex-row">
        <div className="">
          <CreateButton />
        </div>
        <div className=" flex justify-end flex-1">
          <Search />
        </div>
      </div>
      <StudentList currentPage={page} query={query} />
    </div>
  )
}
