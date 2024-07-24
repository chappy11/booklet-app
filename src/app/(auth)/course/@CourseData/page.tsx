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
  const data = await getCourses()

  return data.map((val: CourseType, i: number) => {
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
    )
  })
}

export default CourseData
