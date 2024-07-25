import { TableHeader } from "@/app/_lib/components"

import CourseData from "./@CourseData/page"
import CreateCourse from "./@CreateCourse/page"

type PageParams =  { params: string, searchParams: { page: string } }

export default function Course(params:PageParams) {
 const {page} = params.searchParams;
 
 return (
    <div className=" flex  flex-1  h-full flex-col">
      <CreateCourse />
      <div className=" h-10"  />
      <CourseData page={parseInt(page)}  />
    </div>
  )
}
