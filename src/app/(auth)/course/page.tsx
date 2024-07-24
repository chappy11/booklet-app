import { TableHeader } from "@/app/_lib/components"

import CourseData from "./@CourseData/page"
import CreateCourse from "./@CreateCourse/page"

export default function Course() {
  return (
    <div className=" flex  flex-1  h-full flex-col">
      <CreateCourse />
      <div className=" h-10" />

      <table className="min-w-full text-left text-sm whitespace-nowrap">
        <thead className="uppercase tracking-wider border-b border-b-white bg-white bg-opacity-80">
          <tr>
            <TableHeader>Course ID</TableHeader>

            <TableHeader>Course Name</TableHeader>
            <TableHeader>Date Created</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody className=" w-full">
          <CourseData />
        </tbody>
      </table>
    </div>
  )
}
