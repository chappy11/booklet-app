import {
  Button,
  TableData,
  TableHeader,
  TableRow,
} from "../../../_lib/components"
import { getCourses } from "../../../_lib/services/Course.service"
import { DateFormat } from "../../../_lib/types/DateFormat.enum"
import { Routes } from "../../../_lib/types/route.enum"
import { CourseType } from "../../../_lib/types/schema.type"
import { formatDate } from "../../../_lib/utils/date.utils"

const CourseData = async () => {
  const data = await getCourses();
  const getNumberPerPage = data.length / 8;

  const numberOfPage = getNumberPerPage > Math.floor(getNumberPerPage) ? Math.floor(getNumberPerPage) + 1 : getNumberPerPage;
  const arrayOfPage = Array.from({length: numberOfPage}, (_, i) => i + 1);
  
  
  return (
  <div className=" w-full">
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
    {data.data.map((val: CourseType, i: number) => {
    return (

      <TableRow key={i.toString()}>
        <TableData>{val.courseCode}</TableData>
        <TableData>{val.courseName}</TableData>
        <TableData>
          {formatDate(val.dateCreated, DateFormat.FORMAT_DATE)}
        </TableData>
        <TableData>
          <a href={Routes.DASHBOARD}>Update</a>
        </TableData>
      </TableRow>
    )})}
  </tbody>
      </table>
      <div className="h-5"/>
    <div className=" flex flex-row ">
    {arrayOfPage.map(val=>(
      <p className=" px-3 py-2 bg-gray-400 mx-2">{val}</p>
    ))}
    </div>
   <p>{data.length}</p>
   </div>
  )
 
}

export default CourseData
